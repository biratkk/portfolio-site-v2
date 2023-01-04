import "../styles/globals.css";
import "../styles/particles.scss";

import type { AppProps } from "next/app";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App({ Component, pageProps }: AppProps) {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);

  return (
    <DarkModeContextProvider
      darkModeEnabled={darkModeEnabled}
      toggleDarkMode={() => setDarkModeEnabled(!darkModeEnabled)}
    >
      {/* <BackgroundParticles/> */}
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
}
