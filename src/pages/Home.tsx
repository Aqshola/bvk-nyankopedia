import React from "react";
import Link from "src/components/links/Link";

export default function Home() {
  return (
    <div className="w-full p-10 h-full flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl text-transparent   bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 ">
        React Stater{" "}
      </h1>
      <p className="mt-5">
        Simple React Stater with Routing, Tailwind, Jest and Cypress
      </p>
      <div className="mt-2 flex gap-2 w-full justify-center">
        <Link to="/how" >
          How
        </Link>
        <Link to="/about" >
          About
        </Link>
      </div>
    </div>
  );
}
