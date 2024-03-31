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

async function getPages() {
  const endpoint = process.env.NEXT_HYGRAPH_ENDPOINT
  if (!endpoint) {
    throw new Error('NEXT_HYGRAPH_ENDPOINT is not defined')
  }
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
  const json = await response.json()
  return json.data
}

export default async function Home() {
  const data = await getPages()
  return (
    <main>
      <ScrollUp />
      <Hero {...data.hero} />
      {data.features && <Features features={data.features} />}
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials testimonials={data.testimonials} />
      <Pricing />
      <Blog />
      <Contact />
    </main>
  )
}