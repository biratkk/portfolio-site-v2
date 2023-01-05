import { RefObject, useEffect, useState } from "react";

const useScrollPosition = (ref: RefObject<HTMLDivElement>) => {
    const [scrollX, setScrollX] = useState<number>();
    const [scrollY, setScrollY] = useState<number>();
    useEffect(() => {
        const el = ref.current;

        const setScrollDimensions = () => {
            setScrollX(el?.scrollLeft);
            setScrollY(el?.scrollTop);
        }

        el?.addEventListener('scroll', setScrollDimensions)
        return () => ref.current?.removeEventListener('scroll', setScrollDimensions);
    }, []);

    return {
        scrollX,
        scrollY
    }
}

export default useScrollPosition;