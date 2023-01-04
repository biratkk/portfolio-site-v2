import { useLayoutEffect, useState } from "react";

type WindowDimensionType = {
    width: number;
    height: number;
}

const getWindowDimensions = (): WindowDimensionType => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    }
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useLayoutEffect(() => {
        const isWindow = typeof window !== 'undefined';
        const handleResize = () => setWindowDimensions(getWindowDimensions());
        if (isWindow) window.addEventListener('resize', handleResize);

        return () => {
            if (isWindow) window.removeEventListener('resize', handleResize);
        }
    }, [windowDimensions])
    return windowDimensions
}


export default useWindowDimensions;