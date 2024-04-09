import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    BASE_URL: z.string().url()
  },

  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
    NEXT_PUBLIC_HYGRAPH_ENDPOINT: z.string().url()
  },

  runtimeEnv: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_HYGRAPH_ENDPOINT: process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
  }
})
