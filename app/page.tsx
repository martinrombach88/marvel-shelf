import { Button } from "./components/Button"
import { Image } from "./components/Image"
import getComics from "@/data-lib/json-lib"
import React from "react"
import ComicCard from "./components/ComicCard"
import Search from "./components/Search"
import SearchingFor from "./components/SearchingFor"

export default async function Home() {
  const comics = await getComics()
  const column2: boolean = false

  return (
    <>
      <div className="header">
        {/* Logo */}
        <Image imageSrc="marvelshelflogo.webp" className="w-60" />
        {/* <SearchingFor /> */}
        <p>Searching For 'Dynamically Generated Target'</p>
      </div>

      {/* Container for two-column layout */}
      <div className="columns">
        {/* Left Column: Search Component */}
        <div className="column1">
          {/* Search Input */}
          <Search />
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
    </>
  )
}
