import { ReactNode } from "react";
import styled from "@emotion/styled";
import HighlightText from "./HighlightText";

type LinkType = {
  children: ReactNode;
  href: string;
};
const Link = ({ children, href }: LinkType) => {
  return (
    <a href={href} className="">
      <LinkWrapper>
        <HighlightText>{children}</HighlightText>
      </LinkWrapper>
    </a>
  );
};

const LinkWrapper = styled.span`
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, rgb(34, 197, 94));

  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.25s ease-in-out;

  :hover {
    background-image: linear-gradient(transparent, transparent),
      linear-gradient(rgb(34 197 94), rgb(34, 197, 94));
    background-size: 100% 2px;
    background-position: 0 100%;
  }
`;

export default Link;
