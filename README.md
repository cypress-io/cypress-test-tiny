# cypress-io/cypress#34807 — `clientCertificates` ignored on the browser network path

Confirmed on Cypress 16.0.0 with Chrome 152, macOS.

`clientCertificates` still works for anything Cypress fetches in Node, but not for anything
the browser fetches itself. On Chrome, Chromium and Edge in 16.x that means every subresource
of the page under test fails against an mTLS origin.

## Run it

```bash
npm install
npm run certs
npx cypress run --browser chrome
```

`--browser chrome` matters. Electron takes the MITM proxy path and all three tests pass there.

Certificates are generated locally and git-ignored. No private keys are committed.
`make-certs.sh` needs bash — it uses process substitution.

## Expected result on 16.0.0

| test | result | why |
| --- | --- | --- |
| `cy.request` | passes | Node opens the connection and presents the cert |
| `cy.visit` document | passes | served from the Node-side `resolve:url` buffer; the browser never requests it |
| `fetch('/sub')` from the page | **fails** | Chrome opens its own connection and has no cert |

The middle row is the trap. A repro whose page has no subresources passes while the bug is
live. The first draft of this repro reported a false negative for exactly that reason.

## Two distinct failure modes

Which one you get depends on whether a matching client identity is in the OS keystore.

| keystore | `#sub` reads | what the user sees |
| --- | --- | --- |
| no matching identity | `FAILED: TypeError: Failed to fetch` | fast, legible failure |
| matching identity installed | `pending` | Chrome hangs; headed mode shows the certificate picker |

Installing the certificate does **not** fix it. It converts a fast failure into a hang. This
is why the original reporter saw a picker dialog and a hang rather than a fetch error: their
machine already had the certificate installed.

To reproduce the second row on macOS, import the generated `certs/client.p12` (passphrase
`repro`) into the login keychain:

```bash
security import certs/client.p12 -k ~/Library/Keychains/login.keychain-db -P repro -T "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

Then remove it afterwards:

```bash
security delete-identity -c repro-client ~/Library/Keychains/login.keychain-db
```

macOS `security` cannot parse OpenSSL 3's default AES-256/SHA-256 PKCS#12 and misreports it
as `invalid passphrase`. `make-certs.sh` pins the legacy 3DES/SHA-1 form to avoid that.

## Mechanism

- `packages/network/lib/agent.ts:243` is the only place a configured client certificate is
  ever attached, inside `CombinedAgent.addRequest` — the agent the Node-side HTTP/1 MITM
  proxy uses. Loaded unconditionally at `packages/server/lib/server-base.ts:431`.
- `packages/server/lib/util/network-mode.ts:12` — `isBrowserNetworkMode()` is true for
  chromium-family browsers, false for Electron, and false when `forceHttp1` is set.
- `packages/server/lib/open_project.ts:112-129` — in browser network mode Chrome launches
  with `proxyServer: undefined`, so `--proxy-server` is omitted
  (`packages/server/lib/browsers/chrome.ts:450-453`). The comment at `chrome.ts:455` states
  it directly: "With the MITM proxy disabled the browser performs origin fetches itself."
- Browser-issued requests are released with `Fetch.continueRequest`
  (`packages/server/lib/browsers/cdp-protocol/cdp-fetch-transport.ts:618`), handing DNS, TCP
  and TLS back to Chromium. Nothing carries the certificate across that boundary.
- The document is the exception, and `packages/server/lib/network-runtime.ts:280-290` says
  why: "visit documents. Their response is already buffered by the resolve:url pre-flight,
  so answering the pause would fulfill from that buffer and the browser would never make a
  request."

The config is silently inert on this path. It is parsed, validated and loaded into the
store, then never consulted. Nothing is logged.

CDP has no client-certificate API. The only such string in the protocol is
`ClientCertRequested`, a prerender-cancellation reason. There is no launch flag either.
Chromium sources client certificates only from the OS or NSS store, and selecting one
without a prompt requires the `AutoSelectCertificateForUrls` enterprise policy.

`--ignore-certificate-errors` does not help. It waives server certificate validation, not
client auth.

This is not the Chromium 146 upgrade named in the issue. It reproduces on Chrome 152.

## Workaround

```bash
npx cypress run --browser chrome --config forceHttp1=true
```

Or use Electron, Firefox or WebKit. All of these take the MITM proxy path.

## Config gotchas found along the way

- `cert`, `key`, `pfx` and `ca` paths must be **relative**.
  `packages/config/src/validation.ts:435-460` rejects absolute paths outright, so
  `path.join(__dirname, ...)` fails config validation.
- Those relative paths resolve against the server process **cwd**, not `projectRoot`
  (`packages/network/lib/client-certificates.ts:347` is a bare `readFileSync`). Run Cypress
  from the project directory.
