import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token, session }) => {
      if (req.nextUrl.pathname.startsWith("/admin")) {
        return token?.role === "ADMIN";
      }

      return !!token;
    },
  },
});

export const config = {
  matcher: ["/admin/:path*", "/users/:path*"],
};
