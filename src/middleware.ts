import { withAuth } from "next-auth/middleware";

export default withAuth(
    function middleware(req) {},
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    },
);

// Middleware configuration for matching routes
export const config = { matcher: ["/wallet"] };
