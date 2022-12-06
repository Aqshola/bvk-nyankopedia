import React from "react";
import Link from "src/components/links/Link";

export default function About() {
  return (
    <div className="w-full h-full p-10">
      <h1 className="text-3xl">Simple about</h1>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
        temporibus?
      </p>
      <div className="flex gap-5">
        <Link to="/" >
          Home
        </Link>
        <Link to="/how" >
          How
        </Link>
      </div>
    </div>
  );
}
