import "../styles/globals.css";
import "../styles/particles.scss";

import type { AppProps } from "next/app";
import { DarkModeContextProvider } from "../context/DarkModeContext";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App({ Component, pageProps }: AppProps) {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);

  useEffect(() => {
    setDarkModeEnabled(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  return (
    <DarkModeContextProvider
      darkModeEnabled={darkModeEnabled}
      toggleDarkMode={() => setDarkModeEnabled(!darkModeEnabled)}
    >
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
}
