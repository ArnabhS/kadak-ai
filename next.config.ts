import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs"

const nextConfig: NextConfig = {
  /* config options here */
};
const withCivicAuth = createCivicAuthPlugin({
  clientId: "46910eb0-2c81-42ae-be0a-0431ca03ba70"
});

export default withCivicAuth(nextConfig)

