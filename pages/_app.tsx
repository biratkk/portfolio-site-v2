import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/particles.scss";

import type { AppProps } from "next/app";
import { DarkModeContextProvider } from "../context/DarkModeContext";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeContextProvider>
      <main className="min-h-screen dark:bg-slate-700 bg-white">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </DarkModeContextProvider>
  );
}
