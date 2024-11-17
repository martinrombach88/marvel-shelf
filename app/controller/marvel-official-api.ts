//this will only work on windows with the correct db set up
import { env } from "process";
import { createHash } from "../helpers/helpers";
import { create } from "domain";

export default async function getComics() {
  const timestamp = Date.now().toString();
  //crypto.createHash("md5").update(ts, );
  const res = await fetch(`https://gateway.marvel.com/v1/public/comics?
    apikey='${createHash()}'
      `);

  return res.json();
  //    ts=${timestamp}&
  // hash=${createHash(timestamp)}
}
