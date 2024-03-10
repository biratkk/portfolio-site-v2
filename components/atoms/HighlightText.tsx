import { ReactNode } from "react";
import styled from "@emotion/styled";

type HighlightTextType = {
    children: ReactNode;
}
const HighlightText = ({children}:HighlightTextType) => {
  return (
    <HighlightWrapper>{children}</HighlightWrapper>
  )
};

const HighlightWrapper = styled.span`
    color: rgb(34, 197, 94);
`

export default HighlightText;