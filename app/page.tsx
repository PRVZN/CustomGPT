import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

import mongoose from "mongoose";

import LandingPage from "./components/landingpage";
import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";
const serverConfig = getServerSideConfig();

export default async function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClerkProvider>
        <LandingPage />
        {serverConfig?.isVercel && <Analytics />}
      </ClerkProvider>
    </>
  );
}
