import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

import PrelineScript from '../components/PrelineScript'

import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Gestor Flights',
    default: 'Gestor Flight'
  },
  description: 'Assessoria especializada em voos integrada a gestão de milhas'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt-BR">
      <body className="dark:bg-black">
        <Providers>{children}</Providers>
      </body>
      <PrelineScript />
    </html>
  )
}
