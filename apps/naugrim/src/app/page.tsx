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

// async function getPages() {
//   const endpoint = process.env.NEXT_HYGRAPH_ENDPOINT
//   if (!endpoint) {
//     throw new Error('NEXT_HYGRAPH_ENDPOINT is not defined')
//   }
//   const response = await fetch(endpoint, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       query: `query Pages {
//         pages {
//           title
//           slug
//           body {
//             text
//           }
//         }
//       }`
//     })
//   })
//   const json = await response.json()
//   return json.data.pages
// }

export default async function Home() {
  // const pages = await getPages()
  // console.log(pages)
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
