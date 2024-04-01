import { Footer, ScrollToTop } from '@/components'
import { Header } from '@/components/Header'

export default function PortalLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}
