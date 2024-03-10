import { ReactNode } from "react";
import styled from "@emotion/styled";

type HighlightTextType = {
    children: ReactNode;
}
const HighlightText = ({children}:HighlightTextType) => {
  return (
    <div className="text-green-600">{children}</div>
  )
};


export default HighlightText;
