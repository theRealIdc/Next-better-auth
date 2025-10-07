import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export const {} = authClient;
