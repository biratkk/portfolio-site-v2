import { Spinner } from "@nextui-org/react";
import { Router } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export const LoadingPage = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  });

  return <div>{loading ? <Spinner /> : children}</div>;
};
