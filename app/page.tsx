import Link from "next/link";
import React from "react";
import Header from "./components/Header";
import SiteLink from "./components/SiteLink";
import { comics } from "../placeholder-data/comics";

export default async function Home() {
  for (let i = 0; i < 10; i++) {
    console.log(comics[i]);
  }

  return (
    <>
      <Header imageWidth="w-72" />
      <div className="columns">
        <div className="column1">
          <SiteLink testId="getLink" buttonText="Get" url={"/get-comics"} />
          <p>other links coming soon</p>
          {/*
          <SiteLink
            testId="searchLink"
            buttonText="Search"
            url={"/search-comics"}
          />
          <SiteLink testId="updateLink" buttonText="Update" url={"/"} />
          <SiteLink testId="deleteLink" buttonText="Delete" url={"/"} />*/}
        </div>
      </div>
    </>
  );
}
