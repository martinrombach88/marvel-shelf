import React from "react";
import ComicCard from "../components/ComicCard";
import Header from "../components/Header";
import { printData } from "../helpers/helpers";

export default function GetComics() {
  return (
    <>

        <Header imageWidth="w-60" />
        {/*
      <div className="columns mt-10">
        <div className="column1">
          {
            <div className="column2 overflow-y-scroll snap-y snap-mandatory w-auto ">
              {comics.map((comic: comic, index: number) => (
                <ComicCard {...comic} key={index} />
              ))}
            </div>
          }
        </div>
      </div>*/}

    </>
  );
}
