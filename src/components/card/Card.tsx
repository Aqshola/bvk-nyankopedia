import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Cat, DetailCat } from "src/types/types";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useDataUrl from "src/hooks/useDataUrl";


type Props = {
  dataCat: Cat;
};

export default function Card({ dataCat }: Props) {
  const [expand, setexpand] = useState<boolean>(false);
  const dataUrl = useDataUrl(150, 150)

  function handleExpand() {
    setexpand(!expand);
  }

  return (
    <div className="w-full  border rounded-md p-2 transition-shadow hover:shadow-md">
      <div className="w-full h-[150px] flex object-cover rounded-md relative justify-center items-center">
        {!dataCat.image && <span>Image Not Found 😔</span> }
        {dataCat.image && (
          <LazyLoadImage
            effect="blur"
            style={{
              objectFit: "cover",
            }}
            width={"100%"}
            height={150}
            placeholderSrc={dataUrl}
            src={dataCat.image.url}
            alt={dataCat.name}
            className="w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex justify-between w-full items-end">
        <h3 className="text-left mt-2 ">{dataCat.name}</h3>
        <button
          className={clsx("w-6 h-6 transition-all", expand && ["rotate-180"])}
          onClick={handleExpand}
        >
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
          "block transition-all px-2 duration-500 overflow-hidden",
          expand && ["h-[200px]  visible py-2"],
          !expand && ["h-0  invisible"]
        )}
      >
        <table className="border-t-2 w-full">
          <tbody>
            <tr className="text-left text-sm pt-2">
              <td>Weight</td>
              <td>:</td>
              <td>{dataCat.weight.imperial}</td>
            </tr>
            <tr className="text-left text-sm ">
              <td>Life Span</td>
              <td>:</td>
              <td>{dataCat.life_span}</td>
            </tr>
            <tr className="text-left text-sm ">
              <td>Origin</td>
              <td>:</td>
              <td>{dataCat.origin}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-left mt-5 overflow-y-auto h-[100px]">
          {dataCat.description}
        </p>
      </div>
    </div>
  );
}
