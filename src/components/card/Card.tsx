import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Cat, DetailCat } from "src/types/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useDataUrl from "src/hooks/useDataUrl";

type Props = {
  dataCat: Cat;
};

export default function Card({ dataCat }: Props) {
  const [expand, setexpand] = useState<boolean>(false);
  const dataUrl = useDataUrl(150, 150);

  function handleExpand() {
    setexpand(!expand);
  }

  return (
    <div data-test-id="card" className="w-full  border rounded-md p-2 transition-shadow hover:shadow-md">
      <div className="w-full h-[150px] flex object-cover rounded-md relative justify-center items-center">
        {!dataCat.image && (
          <img src="/image/nyan.png" className="flex w-full h-full" alt="" />
        )}
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
        <h3 className="text-left text-2xl mt-2 text-pink-primary">{dataCat.name}</h3>
        <button
          aria-label="expand"
          className={clsx("w-6 h-6 transition-all", expand && ["rotate-180 expand"])}
          onClick={handleExpand}
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 10V9V8H18H17V7V6H16H15V5V4H14H13V3V2H12V1H11V0H10H9V1H8V2H7V3V4H6H5V5V6H4H3V7V8H2H1V9V10H0V11V12H1H2H3V11V10H4H5V9V8H6H7V7V6H8H9V5V4H10H11V5V6H12H13V7V8H14H15V9V10H16H17V11V12H18H19H20V11V10H19Z"
              fill="white"
            />
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
            {dataCat.weight && (
              <tr className="text-left  pt-2">
                <td>Weight</td>
                <td>:</td>
                <td>{dataCat.weight.imperial}</td>
              </tr>
            )}
            <tr className="text-left  ">
              <td>Life Span</td>
              <td>:</td>
              <td>{dataCat.life_span}</td>
            </tr>
            <tr className="text-left  ">
              <td>Origin</td>
              <td>:</td>
              <td>{dataCat.origin}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-left mt-5 overflow-y-auto h-[100px] md:h-[90px]">
          {dataCat.description}
        </p>
      </div>
    </div>
  );
}
