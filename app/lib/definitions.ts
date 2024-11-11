export type comic = {
  comic_name: string
  active_years: string
  issue_title: string
  publish_date: string
  issue_description: string
  penciler: string
  writer: string
  cover_artist: string
  Imprint: string
  Format: string
  Rating: string
  Price: string
}

//docs tutorial types:
export type Invoice = {
  id: string
  customer_id: string
  amount: number
  date: string
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid"
}

//tutorial types:
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
