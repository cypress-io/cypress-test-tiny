import type { CookieOptions, Request, Response } from 'express'
import { config, type Subdomain } from './config'

export interface LoginPageContext {
  csrfToken: string
}

export interface LoginContext {
  username: string
}

export interface HomeContext {
  username: string
}

/**
 * Extension point: GET /login
 *
 * Called before the login form is rendered. Set any cookies that should exist
 * when the user lands on the login page (CSRF, anonymous session, etc.).
 */
export function attachCookiesForLoginPage(
  _req: Request,
  res: Response,
  subdomain: Subdomain,
  ctx: LoginPageContext,
): void {
  res.cookie(config.cookieNames.csrf, ctx.csrfToken, cookieOptions('csrf', subdomain))
}

/**
 * Extension point: POST /login (successful authentication)
 *
 * Called after credentials and CSRF validate. Set session/auth cookies here.
 */
export function attachCookiesForLogin(
  _req: Request,
  res: Response,
  subdomain: Subdomain,
  ctx: LoginContext,
): void {
  res.cookie(
    config.cookieNames.session,
    `${subdomain}-session:${ctx.username}`,
    cookieOptions('session', subdomain),
  )
}

/**
 * Extension point: GET / (post-login home page)
 *
 * Called when serving the authenticated home page. Use to refresh cookies or
 * set additional state after login.
 */
export function attachCookiesForHome(
  _req: Request,
  res: Response,
  subdomain: Subdomain,
  ctx: HomeContext,
): void {
  res.cookie(
    config.cookieNames.session,
    `${subdomain}-session:${ctx.username}`,
    cookieOptions('session', subdomain),
  )
}

type CookieKind = 'csrf' | 'session'

function cookieOptions(kind: CookieKind, subdomain: Subdomain): CookieOptions {
  const secure = true
  const path = '/'

  if (kind === 'csrf') {
    return {
      httpOnly: false,
      secure,
      sameSite: 'lax',
      path,
      // domain: `.${config.superdomain}`, // uncomment to scope CSRF to superdomain
    }
  }

  return {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    path,
    // domain: `.${config.superdomain}`, // uncomment to reproduce cross-subdomain cookie bleed
    // host-only (default): cookie is scoped to config.hosts[subdomain]
  }
}
