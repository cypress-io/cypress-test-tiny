#!/usr/bin/env bash
# Process substitution below is a bash feature, so this cannot be #!/bin/sh —
# /bin/sh is dash on most Linux distributions.
set -e
cd "$(dirname "$0")"
mkdir -p certs && cd certs

openssl req -x509 -newkey rsa:2048 -nodes -days 365 \
  -keyout ca.key -out ca.crt -subj "/CN=repro-ca"

openssl req -newkey rsa:2048 -nodes -keyout server.key -out server.csr -subj "/CN=localhost"
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 \
  -extfile <(printf "subjectAltName=DNS:localhost,IP:127.0.0.1\nbasicConstraints=CA:FALSE")

openssl req -newkey rsa:2048 -nodes -keyout client.key -out client.csr -subj "/CN=repro-client"
openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 365

# Only needed to test the "cert is installed in the OS store" variant of the bug.
# macOS Security.framework cannot parse OpenSSL 3's default AES-256/SHA-256 PKCS#12
# and misreports it as a bad passphrase, so pin the legacy 3DES/SHA-1 form.
openssl pkcs12 -export -out client.p12 -inkey client.key -in client.crt -certfile ca.crt \
  -passout pass:repro -certpbe PBE-SHA1-3DES -keypbe PBE-SHA1-3DES -macalg sha1

rm -f ./*.csr ./*.srl
