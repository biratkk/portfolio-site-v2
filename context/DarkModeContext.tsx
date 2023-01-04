import { createContext, ReactNode, useContext } from "react"

type DarkModeContextType = {
    darkModeEnabled: boolean;
    toggleDarkMode: () => void;
}


const DarkModeContext = createContext<DarkModeContextType>({
    darkModeEnabled: false,
    toggleDarkMode: () => {}
});

export const DarkModeContextProvider = ({children, darkModeEnabled, toggleDarkMode}:{children: ReactNode} & DarkModeContextType) => {
    return (
        <DarkModeContext.Provider value={{darkModeEnabled, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext;