import React from "react"
import ComicCard from "../components/ComicCard"
import SiteLink from "@/app/components/SiteLink"
import ToggleText from "@/app/components/ToggleText"

import getComics from "@/data-lib/json-lib"
import Header from "../components/Header"
import { Comic } from "../lib/definitions"

export default async function SearchComics() {
  const comics = await getComics()
  const column2: boolean = true
  return (
    <body>
      <Header />
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
            {comics.map((comic: Comic, index: number) => (
              <ComicCard {...comic} key={index} />
            ))}
          </div>
        )}
      </div>
    </body>
  )
}
