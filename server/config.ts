export const config = {
  port: 3443,
  healthPort: 3444,
  superdomain: 'something.test',
  hosts: {
    admin: 'admin.something.test',
    dashboard: 'dashboard.something.test',
  },
  cookieNames: {
    csrf: 'csrf',
    session: 'session',
  },
} as const

export type Subdomain = keyof typeof config.hosts

export function hostFor(subdomain: Subdomain): string {
  return config.hosts[subdomain]
}

export function urlFor(subdomain: Subdomain): string {
  return `https://${hostFor(subdomain)}:${config.port}`
}
