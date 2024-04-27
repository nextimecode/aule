import { AboutSubtitle } from '@/components/About/AboutSubtitle'

import { AboutProps } from '@/data/types/AboutProps'
import { env } from '@/env'

async function getAboutData(): Promise<AboutProps> {
  const endpoint = env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query Home {
        page(where: {slug: "about"}) {
          id
          navigationLabel
          content {
            html
          }
        },
      }`
    }),
    next: {
      revalidate: 60 * 5 // 5 minutes
    }
  })
  const { data } = await response.json()
  return data.page
}

export default async function AboutPage() {
  const { navigationLabel, content } = await getAboutData()

  return (
    <>
      <AboutSubtitle content={content.html} navigationLabel={navigationLabel} />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  )
}
