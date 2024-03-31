export interface Feature {
  id: number
  icon: JSX.Element
  title: string
  content: string
}

export interface FeaturesProps {
  features: Feature[]
  title?: string
  subTitle?: string
}
