import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
 
const isSignInPage = createRouteMatcher(["/auth"]);
const isProtectedRoute = createRouteMatcher(["/boards(.*)"]);
 
export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
    console.log(await convexAuth);
  if (isSignInPage(request) && (await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, "/boards");
  }
  if (isProtectedRoute(request) && !(await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};