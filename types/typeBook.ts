export type Book = {
  id: number
  title: string
  author: string
  image: string
  progress?: number
  category?: string
  status?: string
  tag?: string
  feature?: boolean
  new?: boolean
  best?: boolean
  price: number
  quantity?: number
}
