import { serialize } from 'next-mdx-remote/serialize'

import { AboutSubtitle } from '@/components/About/AboutSubtitle'

import he from 'he'

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
          subtitle
        },
      }`
    })
  })
  const json = await response.json()
  const subtitle = await serialize(he.decode(json.data.page.subtitle))
  json.data.page.subtitle = subtitle
  return json.data.page
}

export default async function AboutPage() {
  const { navigationLabel, subtitle } = await getAboutData()

  return (
    <>
      <AboutSubtitle subtitle={subtitle} navigationLabel={navigationLabel} />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  )
}
