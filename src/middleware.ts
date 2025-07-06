// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// export function middleware(request: NextRequest){
//     const response = NextResponse.next();
//     const themePreference = request.cookies.get("theme")
//     if (!themePreference) {
//         response.cookies.set("theme", "dark")
//     }

//     response.headers.set("X-Custom-Header", "Hello from middleware");

//     return response;


//     if (request.nextUrl.pathname === "/products") {
//         return NextResponse.redirect(new URL("/", request.nextUrl));
//     }

//     // return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//     matcher: ["/profile", "/profile/:path*"],
// }

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher(["/user-profile"])
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

export default clerkMiddleware(async (auth, req)=>{
    // if (isProtectedRoute(req)) await auth.protect()
    // if (!isPublicRoute(req)) await auth.protect()
    const { userId, redirectToSignIn } = await auth();
    if (!userId && !isPublicRoute(req)) {
        return redirectToSignIn();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};