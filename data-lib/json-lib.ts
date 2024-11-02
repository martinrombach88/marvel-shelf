export default async function getComics() {
    const res = await fetch('http://localhost:5122/')
  
    return res.json()
  }
  