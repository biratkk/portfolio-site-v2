import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/particles.scss";

import type { AppProps } from "next/app";
import { DarkModeContextProvider } from "../context/DarkModeContext";
import Navbar from "./components/navbar";
import { Suspense } from "react";
import { LoadingPage } from "../components/LoadingPage";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <DarkModeContextProvider>
        <LoadingPage>
          <main className="min-h-screen overflow-x-hidden dark:bg-slate-700 bg-white">
            <Navbar />
            <Component {...pageProps} />
          </main>
        </LoadingPage>
      </DarkModeContextProvider>
  );
}
