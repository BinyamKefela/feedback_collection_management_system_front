import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      await jwtVerify(token, SECRET); // throws if invalid or expired
      return NextResponse.next();
    } catch (err) {
      console.error('Invalid token:', err);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}
