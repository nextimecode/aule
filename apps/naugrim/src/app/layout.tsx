import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

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
  description: ''
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
    </html>
  )
}
