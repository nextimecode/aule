import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface AboutProps {
  navigationLabel: string
  subtitle: MDXRemoteSerializeResult
}
