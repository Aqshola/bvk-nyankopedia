import React from "react";
import Link from "src/components/links/Link";

export default function NotFound() {
  return (
    <div className="text-3xl w-full h-full flex justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        No page here
      </h1>
      <div className="mt-5 text-center">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
