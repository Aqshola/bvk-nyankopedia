import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <Helmet>
        <title>Nyankopedia</title>
        <meta name="description" content="Nyan explorer" />
      </Helmet>
      <div className="max-w-screen-2xl min-h-screen mx-auto bg-blue-primary text-white">{children}</div>
    </>
  );
}
