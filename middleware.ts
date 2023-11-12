import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { startPage } from '@/utils/surveyConfig';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/survey/${startPage}`, request.url));
}

export const config = {
  matcher: ['/', '/survey'],
};
