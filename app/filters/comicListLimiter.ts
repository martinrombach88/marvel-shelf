import { comic } from "../lib/definitions";

export const comicListLimiter = (
  comicList: comic[],
  listStart: number,
  listLimit: number
): comic[] => {
  if (comicList.length === 0) {
    throw new Error("Comic List Invalid");
  }
  comicList = comicList.slice(listStart, listLimit);
  return comicList;
};

/*
export const comicCardFilter = (
    searchTerm: iComicSearchTerm,
    comicList: comic[]
  ): comic[] => {
    return test;
  };

  {comicData.map((comic: comic, index: number) => (
    <ComicCard {...comic} key={index} />
  ))}
*/
