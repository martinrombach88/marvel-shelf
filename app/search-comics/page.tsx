import React from "react"
import ComicCard from "../components/ComicCard"
import SiteLink from "@/app/components/SiteLink"
import ToggleText from "@/app/components/ToggleText"

import getComics from "@/data-lib/json-lib"
import Header from "../components/Header"

export default async function SearchComics() {
  const comics = await getComics()
  const column2: boolean = true
  return (
    <body>
      <Header />
      {/* Container for two-column layout */}
      <div className="columns">
        {/* Left Column: Search Component */}
        <div className="column1">
          {/* Search Input */}
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
            {/* Right Column: Comic Cards */}
            {/* Loop to display multiple ComicCard components */}

            {comics.map((comic, index: number) => (
              <ComicCard {...comic} key={index} />
            ))}
          </div>
        )}
      </div>
    </body>
  )
}
