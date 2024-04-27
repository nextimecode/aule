import { Author } from './Author'

export type BlogProps = {
  id: number
  title: string
  paragraph: string
  image: string
  author: Author
  tags: string[]
  publishDate: string
}
