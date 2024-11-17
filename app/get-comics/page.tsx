import React from "react";
import { comic } from "../lib/definitions";
import ComicCard from "../components/ComicCard";
import Header from "../components/Header";
import { comicData } from "../../placeholder-data/comics";
import { comicListLimiter } from "../filters/comicListLimiter";

export default function GetComics() {
  const comicList = comicListLimiter(comicData, 12000, 12300);

  return (
    <>
      <Header imageWidth="w-60" goBackButton={true} />
      {
        <div className="columns mt-10">
          <div className="column1">
            {
              <div className="column2 overflow-y-scroll snap-y snap-mandatory w-auto ">
                {comicList.map((comic: comic, index: number) => (
                  <ComicCard {...comic} key={index} />
                ))}
              </div>
            }
          </div>
        </div>
      }
    </>
  );
}
