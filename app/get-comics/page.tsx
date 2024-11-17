import React from "react";
import ComicCard from "../components/ComicCard";
import getComics from "@/app/controller/marvel-official-api";
import Header from "../components/Header";

export default async function GetComics() {
  //const comics = await getComics();
  //console.log(comics);

  return (
    <body>
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
    </body>
  );
}
