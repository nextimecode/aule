import type { FeaturesProps } from './Features'
import type { Testimonial } from './Testimonial'

export interface HomeProps {
  // eslint-disable-next-line no-undef
  hero: Hero
  features: FeaturesProps
  testimonials: Testimonial
  message?: string
}
