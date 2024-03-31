import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import '@aule/ui/dist/index.css'
import './global.css'

import { Header, Footer, ScrollToTop } from '@/components'

import '../../../../node_modules/react-modal-video/css/modal-video.css'

import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    template: '%s | aule',
    default: 'aule'
  },
  description: ''
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning className={inter.variable} lang="pt-BR">
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
