import clsx from "clsx";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Card from "src/components/card/Card";
import Loading from "src/components/loading/Loading";
import useQuery from "src/hooks/useQuery";
import { Cat } from "src/types/types";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  const [currScroll, setcurrScroll] = useState(0);
  const [listCat, setlistCat] = useState<Cat[]>([]);
  const [lastPage, setlastPage] = useState(false);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  

  const page = useRef(0);
  const loading = useRef(true);
  const init = useRef(true)

  const searchParam=useQuery().get("search");
  

  window.onscroll = scrollDownUpdate;
  useEffect(() => {
    if(!init.current) return

    if(searchParam){
      handleSearch(searchParam)
      setsearch(searchParam)
    }else{
      getListCat(page.current);
    }
    document.addEventListener("scroll", scrollDownUpdate);
    init.current=false
    return window.removeEventListener("scroll", scrollDownUpdate);
  }, []);

  function scrollDownUpdate() {
    if (!document.scrollingElement) return;

    setcurrScroll(document.documentElement.scrollTop);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.scrollingElement.scrollHeight - 20
    ) {
      if (!lastPage) {
        if (!loading.current) {
          infiniteScroll();
        }
      }
    }
  }

  async function getListCat(page: number) {
    loading.current = true;
    let data = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`
    );
    let parsedData = await data.json();
    if (parsedData.length > 0) {
      setlistCat(parsedData);
    } else {
      setlastPage(true);
    }
    loading.current = false;
  }

  async function infiniteScroll() {
    if (listCat.length === 0) return;
    loading.current = true;
    page.current = page.current + 1;
    let data = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=10&page=${page.current}`
    );
    let parsedData = await data.json();
    if (parsedData.length > 0) {
      setlistCat([...listCat, ...parsedData]);
    } else {
      setlastPage(true);
    }

    loading.current = false;
  }

  function searchCat(e: FormEvent<HTMLInputElement>) {
    const searching = e.currentTarget.value;
    setsearch(searching);
    const debounce = setTimeout(() => {
      if (searching.trim() !== "") {
        navigate(`?search=${searching}`);
        handleSearch(searching);
      } else {
        navigate(`/`);
        getListCat(0);
        page.current = 0;
      }
    }, 1000);
    return () => clearTimeout(debounce);
  }

  async function handleSearch(keyword: string) {
    loading.current = true;
    let data = await fetch(
      `https://api.thecatapi.com/v1/breeds/search?q=${keyword}`
    );
    let parsedData = await data.json();
    setlistCat(parsedData);
    loading.current = false;
  }

  return (
    <div
      ref={container}
      className={"w-full p-5 md:p-10 h-full flex flex-col justify-center items-center text-center relative "}
    >
      <div>
        <img src="/image/nyan.png" className="flex w-full h-full" alt="" />
      </div>
      <Link to={"/"} className="text-center font-bold text-5xl text-pink-primary">Nyankopedia</Link>
      <div
        className={clsx(
          "z-50 py-2 md:px-20 rounded-md mt-5 w-full transition-all flex items-center justify-between",
          currScroll > 10 && ["sticky top-0 bg-blue-primary"]
        )}
      >
        <h2 className="text-2xl text-left">List Cats</h2>
        <input
          value={search}
          onChange={searchCat}
          type="search"
          placeholder="Search Cat"
          className="placeholder:text-left border p-1 px-2 border-black rounded-md bg-blue-primary"
        />
      </div>
      <div className="w-full max-w-screen-xl mt-2">
        <div className="grid grid-cols-12 gap-3">
          {!loading.current && listCat.length === 0 && (
            <div className="col-span-12 mt-10">
              <h3 className="text-3xl">No Nyan 😔</h3>
            </div>
          )}
          { listCat.length > 0 &&
            listCat.map((el) => (
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
