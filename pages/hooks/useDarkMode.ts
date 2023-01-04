import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const useDarkMode = ():[boolean, () => void] => {
    const {darkModeEnabled, toggleDarkMode} = useContext(DarkModeContext);
    return [darkModeEnabled, toggleDarkMode];
}

export default useDarkMode;