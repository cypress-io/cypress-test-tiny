import selfsigned from 'selfsigned'
import { config } from './config'

export function generateTlsCredentials(): { key: string; cert: string } {
  const hosts = Object.values(config.hosts)

  const pems = selfsigned.generate(
    [{ name: 'commonName', value: hosts[0] }],
    {
      days: 365,
      keySize: 2048,
      extensions: [
        {
          name: 'subjectAltName',
          altNames: hosts.map((host) => ({ type: 2, value: host })),
        },
      ],
    },
  )

  return { key: pems.private, cert: pems.cert }
}
