import type { Image } from './Image'

export interface Person {
  id: string
  name: string
  photo: Image
  role: string
  star: number
}
