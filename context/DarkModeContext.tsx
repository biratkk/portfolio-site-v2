import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type DarkModeContextType = {
  darkModeEnabled: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType>({
  darkModeEnabled: false,
  toggleDarkMode: () => {},
});

export const DarkModeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);

  const toggleDarkMode = () => {
    window.localStorage.setItem(
      "darkMode",
      !darkModeEnabled ? "true" : "false"
    );
    setDarkModeEnabled(!darkModeEnabled);
  };

  const setLocalStorageDarkMode = (mode: string) => {
    window.localStorage.setItem("darkMode", mode);
  };
  useEffect(() => {
    
    const windowPref =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userHasPreference = window.localStorage.getItem("darkMode") !== null;
    const userPref = window.localStorage.getItem("darkMode") === 'true';
    console.log(windowPref, userHasPreference, userPref);
    let darkMode = windowPref;
    if (userHasPreference) darkMode = userPref;
    setLocalStorageDarkMode(darkMode ? 'true' : 'false');
    setDarkModeEnabled(darkMode);
  }, []);
  return (
    <DarkModeContext.Provider
      value={{ darkModeEnabled: darkModeEnabled, toggleDarkMode }}
    >
      <div className={`${darkModeEnabled ? "dark" : ""}`}>{children}</div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): [boolean, () => void] => {
  const { darkModeEnabled, toggleDarkMode } = useContext(DarkModeContext);
  return [darkModeEnabled, toggleDarkMode];
};

export default DarkModeContext;
