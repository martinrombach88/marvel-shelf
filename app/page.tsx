import Link from "next/link";
import React from "react";
import Header from "./components/Header";
import SiteLink from "./components/SiteLink";

export default function Home() {
  return (
    <>
      <Header imageWidth="w-72" />
      <div className="columns">
        <div className="column1">
          <SiteLink testId="getLink" buttonText="Get" url={"/get-comics"} />
          <SiteLink
            testId="searchLink"
            buttonText="Search"
            url={"/search-comics"}
          />
        </div>
      </div>
    </>
  );
}
