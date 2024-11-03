import React from "react"
import ComicCard from "../components/ComicCard"
import SiteLink from "@/app/components/SiteLink"
import ToggleText from "@/app/components/ToggleText"

import getComics from "@/data-lib/json-lib"
import Header from "../components/Header"
import { Comic } from "../lib/definitions"

export default async function GetComics() {
  const comics = await getComics()

  return (
    <body>
      <Header imageWidth="w-60" />
      <div className="columns mt-10">
        <div className="column1">
          {
            <div className="column2 overflow-y-scroll snap-y snap-mandatory w-auto ">
              {comics.map((comic: Comic, index: number) => (
                <ComicCard {...comic} key={index} />
              ))}
            </div>
          }
        </div>
      </div>
    </body>
  )
}
