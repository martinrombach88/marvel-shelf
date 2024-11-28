//this will only work on windows with the correct db set up

export default async function getComics() {
    const res = await fetch('http://localhost:5122/')
  
    return res.json()
  }
  