import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/particles.scss";

import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { DarkModeContextProvider } from "../context/DarkModeContext";
import Navbar from "../components/navbar";
import ContactMeSidebar from "../components/ContactMeSidebar";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <DarkModeContextProvider>
      <NextNProgress />
      <main className="min-h-screen overflow-x-hidden text-gray-800 bg-white dark:bg-black dark:text-white ">
        {!Component.getLayout ? (
          <ContactMeSidebar>
            <Component {...pageProps} />
          </ContactMeSidebar>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
      </main>
    </DarkModeContextProvider>
  );
}
