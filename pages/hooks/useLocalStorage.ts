import { useState } from "react";

const getFromLocalStorage = <T>(key:string):T => JSON.parse(window.localStorage.getItem(key) || ""); 

const setToLocalStorage = <T>(key:string, value:T) => window.localStorage.setItem(key, JSON.stringify(value));

const useLocalStorage = <T>(key:string) => {
    const [currentValue, setCurrentValue] = useState<T>(getFromLocalStorage(key));

    const setter = (value: T) => {
        setToLocalStorage(key, value);
        setCurrentValue(value);
    }

    return {
        item:currentValue,
        setter
    };
}

export default useLocalStorage;