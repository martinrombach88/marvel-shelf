import Link from "next/link"
import React from "react"
import Header from "./components/Header"
import SiteLink from "./components/SiteLink"

export default async function Home() {
  return (
    <body>
      <Header imageWidth="w-72" />
      <div className="columns">
        <div className="column1">
          <SiteLink testId="getLink" buttonText="Get" url={"/get-comics"} />
          <SiteLink
            testId="searchLink"
            buttonText="Search"
            url={"/search-comics"}
          />
          <SiteLink testId="updateLink" buttonText="Update" url={"/"} />
          <SiteLink testId="deleteLink" buttonText="Delete" url={"/"} />
        </div>
      </div>
    </body>
  )
}
