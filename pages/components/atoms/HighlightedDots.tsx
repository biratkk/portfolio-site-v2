import { useEffect, useState } from "react";

type HighlightedDotsType = {
  highlightedIndex: number;
  numOfDots: number;
};
const HighlightedDots = ({
  highlightedIndex,
  numOfDots,
}: HighlightedDotsType) => {
    const [tempArr, setTempArr] = useState(new Array(numOfDots));

    useEffect(() => {
        setTempArr(new Array(numOfDots));
    }, [numOfDots])
  return (
    <div>
      {tempArr && tempArr.map((val, currentInd) => {
        return (
          <div
            className={`h-2 w-2 ${
              highlightedIndex === currentInd
                ? "bg-slate-800 dark:bg-slate-50"
                : "bg-slate-700 dark:bg-slate-200"
            } rounded-full`}
          >dsasdasdd</div>
        );
      })}
    </div>
  );
};

export default HighlightedDots;
