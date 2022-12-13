import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <Helmet>
        <title>React Stater</title>
      </Helmet>
      <div className="max-w-screen-2xl h-screen mx-auto">{children}</div>
    </>
  );
}
