import React from "react"
import ComicCard from "../components/ComicCard"
import SiteLink from "@/app/components/SiteLink"
import ToggleText from "@/app/components/ToggleText"

import getComics from "@/data-lib/json-lib"
import Header from "../components/Header"

export default async function GetComics() {
  const comics = await getComics()

  return (
    <body>
      <Header imageWidth="w-60" />
      {/* Container for two-column layout */}
      <div className="columns mt-10">
        {/* Left Column: Search Component */}
        <div className="column1">
          {/* Search Input */}
          {
            <div className="column2 overflow-y-scroll snap-y snap-mandatory w-auto ">
              {/* Right Column: Comic Cards */}
              {/* Loop to display multiple ComicCard components */}

              {comics.map((comic, index: number) => (
                <ComicCard {...comic} key={index} />
              ))}
            </div>
          }
        </div>
      </div>
    </body>
  )
}
