import { ReactNode } from "react";

type HighlightTextType = {
    children: ReactNode;
}
const HighlightText = ({children}:HighlightTextType) => {
  return (
<<<<<<< Updated upstream
    <HighlightWrapper>{children}</HighlightWrapper>
=======
    <span className="text-green-600">{children}</span>
>>>>>>> Stashed changes
  )
};


export default HighlightText;
