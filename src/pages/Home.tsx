import React, { useEffect, useRef, useState } from "react";
import Card from "src/components/card/Card";

export default function Home() {
  const [loading, setloading] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const [page, setpage] = useState(0)

  useEffect(() => {
    getListCat()
  }, [])
  

  function scrollDownUpdate() {
    if (container.current) {
      const { scrollTop, scrollHeight, clientHeight } = container.current;
      const bottomPosition = scrollTop + clientHeight;

      if (bottomPosition >= scrollHeight - 10) {
        console.log("loading...");
      }
    }
  }

  function getListCat(){

  }

  return (
    <div
      ref={container}
      onScroll={scrollDownUpdate}
      className="overflow-y-scroll w-full p-5 md:p-10 h-full flex flex-col justify-center items-center text-center relative"
    >
      <h1 className="text-center font-bold text-3xl text-">Cat Explorer</h1>
      <div className="py-2 px-2 rounded-md mt-2 w-full md:w-96 sticky top-0 backdrop-blur-sm bg-white/30 ">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Cat"
          className="placeholder:text-left w-full border p-2 rounded-md"
        />
        <h2 className="text-2xl text-left mt-5">List Cats</h2>
      </div>
      <div className="w-full max-w-screen-xl">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
