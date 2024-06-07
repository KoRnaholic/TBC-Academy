// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: `${process.env.AUTH0_BASE_URL}/api/login-user`,
    authorizationParams: {
      prompt: "login", // Forces the user to always log in
    },
  }),
});
