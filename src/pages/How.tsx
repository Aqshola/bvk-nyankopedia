import React from "react";
import Link from "src/components/links/Link";

export default function How() {
  return (
    <div className="w-full h-full p-10">
      <h1 className="text-3xl">How To</h1>
      <ul className="list-disc">
        <li>Fork from github</li>
        <li>NPM install</li>
        <li>Done</li>
      </ul>
      <div className="flex mt-2 justify-center gap-5">
        <Link to="/" >
          Home
        </Link>
        <Link to="/about" >
          About
        </Link>
      </div>
    </div>
  );
}
