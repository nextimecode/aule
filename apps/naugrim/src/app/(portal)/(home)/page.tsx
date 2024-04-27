import { Metadata } from 'next'

import {
  // AboutSectionOne,
  // AboutSectionTwo,
  // Blog,
  Brands,
  ScrollUp,
  // Contact,
  Features,
  Hero,
  // Pricing,
  Testimonials,
  Video
} from '@/components'

import type { HeroProps, TestimonialProps, Feature } from '@/data/types'
import { env } from '@/env'

export const metadata: Metadata = {
  title: 'Home'
}

interface HomeProps {
  hero: HeroProps
  features: Feature[]
  testimonials: TestimonialProps[]
}

async function getHomeData(): Promise<HomeProps> {
  const endpoint = env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query Home {
        hero(where: {slug: "home-hero"}) {
          id
          image {
            id
            width
            height
            url
          }
          slug
          buttons {
            id
            label
            href
          }
          heading
          subheading
        },
        features {
          id
          title
          content
          icon
        },
        testimonials {
          id
          content
          person {
            id
            name
            photo {
              height
              width
              url
              id
            }
            role
            star
          }
        }
      }`
    })
  })
  const { data } = await response.json()

  return data
}

export default async function Home() {
  const data = await getHomeData()
  return (
    <main>
      <ScrollUp />
      <Hero {...data.hero} />
      {data.features && <Features features={data.features} />}
      <Video />
      <Brands />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Testimonials
        testimonials={data.testimonials}
        title={'Depoimentos de Viajantes'}
        subTitle={'Nossos clientes compartilham suas experiências'}
      />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </main>
  )
}
