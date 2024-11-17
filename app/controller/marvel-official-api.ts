import { env } from "process";
import { createHash } from "../helpers/helpers";
import { create } from "domain";

/*Marvel API is no longer maintained.

export default async function getComics() {
  const timestamp = Date.now().toString();
  const apiHash = createHash(
    timestamp,
    env.MARVEL_PUBLIC_KEY,
    env.MARVEL_PRIVATE_KEY
  );
  const apiKey = env.MARVEL_PUBLIC_KEY;

  const res =
    await fetch(`https://gateway.marvel.com/v1/public/comics?hash=${apiHash}&ts=${timestamp}&apikey='${apiKey})'
      `);

  return res.json();
}
*/
