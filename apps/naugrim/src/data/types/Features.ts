export interface Feature {
  id: number
  // eslint-disable-next-line no-undef
  icon: JSX.Element
  title: string
  content: string
}

export interface FeaturesProps {
  features: Feature[]
  title?: string
  subTitle?: string
}
