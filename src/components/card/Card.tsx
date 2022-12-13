import React, { useState } from "react";
import clsx from "clsx";

type Props = {};

export default function Card({}: Props) {
  const [expand, setexpand] = useState<boolean>(false);

  function handleExpand() {
    setexpand(!expand);
  }

  return (
    <div className="w-full border rounded-md p-2">
      <div className="w-full h-[150px] flex bg-green-300 rounded-md"></div>
      <div className="flex justify-between w-full items-end">
        <h3 className="text-left mt-2 ">Cat Title</h3>
        <button className={clsx("w-6 h-6 transition-all",expand &&["rotate-180"])} onClick={handleExpand}>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={clsx(
          "block transition-all bg-gray-200 px-2 duration-500 overflow-hidden",
          expand && ["h-[150px]  visible py-2"],
          !expand && ["h-0  invisible"]
        )}
      >
        <p className="text-sm text-left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        corrupti tempora aliquam ducimus totam fuga qui illum facilis ea
        quaerat!

        </p>
      </div>
    </div>
  );
}
