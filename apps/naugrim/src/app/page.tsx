'use client'

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
} from '@/components'

export default function Home() {
  return (
    <>
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
    </>
  )
}
