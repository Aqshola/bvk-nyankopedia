import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Card from "src/components/card/Card";
import Loading from "src/components/loading/Loading";
import { Cat } from "src/types/types";

export default function Home() {
  
  const container = useRef<HTMLDivElement>(null);

  const [currScroll, setcurrScroll] = useState(0);
  const [listCat, setlistCat] = useState<Cat[]>([]);

  const page = useRef(0);
  const loading = useRef(true)

  window.onscroll=scrollDownUpdate
  useEffect(() => {
    getListCat(page.current);
    document.addEventListener("scroll", scrollDownUpdate);
    return window.removeEventListener("scroll", scrollDownUpdate);
  }, []);

  function scrollDownUpdate() {
    if (!document.scrollingElement) return;

    setcurrScroll(document.documentElement.scrollTop);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.scrollingElement.scrollHeight -20
    ) {
      console.log(loading.current)
      if(!loading.current){
        infiniteScroll()
      }
    }
  }

  async function getListCat(page:number) {
    loading.current=true
    let data = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`
    );
    let parsedData = await data.json();
    setlistCat(parsedData);
    console.log(listCat)
    loading.current=false
  }

  async function infiniteScroll(){
    if(listCat.length===0)return
    loading.current=true
    page.current=page.current+1
    let data = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=10&page=${page.current}`
    );
    let parsedData = await data.json();
    setlistCat([...listCat,...parsedData]);
    loading.current=false
  }

  return (
    <div
      ref={container}
      className="w-full p-5 md:p-10 h-full flex flex-col justify-center items-center text-center relative"
    >
      <h1 className="text-center font-bold text-5xl text-">Cat Explorer</h1>
      <div
        className={clsx(
          "z-50 py-2 md:px-20 rounded-md mt-5 w-full transition-all flex items-center justify-between",
          currScroll > 10 && ["sticky top-0 backdrop-blur-sm bg-white/30"]
        )}
      >
        <h2 className="text-2xl text-left">List Cats</h2>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Cat"
          className="placeholder:text-left border p-2 rounded-md"
        />
      </div>
      <div className="w-full max-w-screen-xl mt-2">
        <div className="grid grid-cols-12 gap-3">
          {listCat.map((el) => (
            <div key={el.id} className="col-span-12 md:col-span-3">
              <Card dataCat={el} />
            </div>
          ))}
        </div>
      </div>

      {loading.current && (
        <div className="mt-5">
          <Loading />
        </div>
      )}
    </div>
  );
}
