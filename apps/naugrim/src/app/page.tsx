import {
  AboutSectionOne,
  AboutSectionTwo,
  Blog,
  Brands,
  ScrollUp,
  Contact,
  Features,
  Hero,
  Pricing,
  Testimonials,
  Video
} from '@aule/ui'

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </main>
  )
}
