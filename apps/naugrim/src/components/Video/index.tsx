/* eslint-disable @next/next/no-img-element */
'use client'

import YouTube from 'react-youtube'

import { SectionTitle } from '../Common/SectionTitle'

export const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container flex flex-col justify-center items-center flex-da">
        <SectionTitle
          title="Sempre ao Seu Lado"
          paragraph="Sua tranquilidade é a nossa missão, em qualquer lugar, a qualquer hora"
          center
          mb="80px"
        />

        <div className="w-full max-w-4xl">
          <YouTube
            opts={{
              height: '390',
              width: '100%',
              playerVars: {
                autoplay: 0
              }
            }}
            id="ytIframe"
            videoId={'vT8mSRrJh3w'}
          />
        </div>
      </div>
    </section>
  )
}
