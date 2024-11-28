import React from "react";
import ComicCard from "../components/ComicCard";
import SiteLink from "@/app/components/SiteLink";
import ToggleText from "@/app/components/ToggleText";


import getComics from "@/app/controller/sql-server-json";
import Header from "../components/Header";
import { comic } from "../lib/definitions";


export default async function SearchComics() {
  //use state that filters the comics by whatever filter you add.
  //then you can put tests on that filter.

  const column2: boolean = true;
  return (
    <body>
      <Header goBackButton={true} />
      <div className="columns">
        <div className="column1">
          <div className="search place-content-center">
            <div className="">
              <ToggleText toggleTitle="Issue Title" />
              <ToggleText toggleTitle="Writer" />
              <ToggleText toggleTitle="Penciler" />
              <ToggleText toggleTitle="You Get It" />
            </div>

            <input
              type="text"
              placeholder="Enter your search term"
              className="p-2 m-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        {column2 && (
          <div className="column2 overflow-y-scroll snap-y snap-mandatory w-auto place-items-center">


            {/*

            {comics.map((comic: comic, index: number) => (
              <ComicCard {...comic} key={index} />
            ))} */}
            <p>test</p>
          </div>
        )}
      </div>
    </body>
  );
}
