import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

import { clerkMiddleware } from "@clerk/nextjs/server";
const clerkMiddlewareFn = clerkMiddleware();
const intlMiddleware = createMiddleware(routing);
// export default clerkMiddleware((auth) => {
//   // 先处理Clerk的认证逻辑
//   // auth().protect(); // 保护需要认证的路由

//   // 应用国际化中间件
//   return intlMiddleware;
// });
export default clerkMiddlewareFn;
export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(cn|en)/:path*",
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
