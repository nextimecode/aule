import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import '@aule/ui/dist/index.css'

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
    <html className={inter.variable} lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}