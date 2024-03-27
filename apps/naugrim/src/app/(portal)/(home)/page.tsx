import { Metadata } from 'next'

import GithubProfile from '@/components/GithubProfile'

import { Button } from '@aule/ui'

import { api } from '@/data/api'
import { HomeProps } from '@/data/types/home'

export const metadata: Metadata = {
  title: 'Home'
}

async function getHomeData(): Promise<HomeProps> {
  const response = await api('/drivers')
  const message = await response.json()
  return message
}
export default async function Home() {
  const { message } = await getHomeData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>{message}</Button>
      <GithubProfile />
    </main>
  )
}
