import { ReactNode } from "react";

type HighlightTextType = {
    children: ReactNode;
}
const HighlightText = ({children}:HighlightTextType) => {
  return (
    <span className="text-green-600">{children}</span>
  )
};


export default HighlightText;
