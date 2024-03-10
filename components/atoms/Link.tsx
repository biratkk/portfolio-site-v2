import { ReactNode } from "react";
import styled from "@emotion/styled";
import HighlightText from "./HighlightText";
import NextLink from 'next/link'

type LinkType = {
  children: ReactNode;
  href: string;
  newTab?: boolean;
};
const Link = ({ children, href, newTab }: LinkType) => {
  return (
    <NextLink href={href} className="hover:underline text-green-500 underline-offset-4" target={newTab ? "_blank" : "_self"}>
      {/* <LinkWrapper>
      </LinkWrapper> */}
        <HighlightText>{children}</HighlightText>
    </NextLink>
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
