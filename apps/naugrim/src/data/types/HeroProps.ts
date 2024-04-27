import { Button } from './Button'
import { Image } from './Image'

export interface HeroProps {
  id: string
  image: Image
  slug: string
  buttons: Button[]
  heading: string
  subheading: string
}
