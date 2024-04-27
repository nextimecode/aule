import { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Footer, ScrollToTop } from '@/components'
import { Header } from '@/components/Header'

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
      <div className="fixed w-15 h-15 z-50 bottom-20 right-5">
        <Link
          href="https://api.whatsapp.com/send?phone=5531992711521&text=Ol%C3%A1,%20Gestor!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt={'Icon whatsapp'}
            src={'/images/icons/whats_button.png'}
            width={79}
            height={79}
          />
        </Link>
      </div>
    </>
  )
}
