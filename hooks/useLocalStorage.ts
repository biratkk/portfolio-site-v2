import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string) => {
  const getFromLocalStorage = <T>(key: string): T | null => {
    const item = window.localStorage.getItem(key);
    return (item ? JSON.parse(item) : item);
  };
  const setToLocalStorage = <T>(key: string, value: T) =>
    window.localStorage.setItem(key, JSON.stringify(value));
  const [currentValue, setCurrentValue] = useState<T>();

  useEffect(() => {
    setCurrentValue(getFromLocalStorage(key) || undefined);
  }, []);

  const setter = (value: T) => {
    setToLocalStorage(key, value);
    setCurrentValue(value);
  };

  return {
    item: currentValue,
    setter,
  };
};

export default useLocalStorage;
