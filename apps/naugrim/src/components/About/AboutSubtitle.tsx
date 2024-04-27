import Image from 'next/image'

import { SectionTitle } from '@/components'

export const AboutSubtitle = ({
  content,
  navigationLabel
}: {
  content: string
  navigationLabel: string
}) => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={navigationLabel} mb="44px" />
              <div
                className="[&_*]:mb-4 [&_h1]:text-4xl [&_h2]:text-3xl [&_h3]:text-2xl [&_h4]:text-xl"
                dangerouslySetInnerHTML={{
                  __html: content
                }}
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
