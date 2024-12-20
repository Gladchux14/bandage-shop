import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('your-auth-cookie-name') // Replace with your actual auth cookie name

  if (!isAuthenticated && request.nextUrl.pathname === '/wishlist-page') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/wishlist-page'
}