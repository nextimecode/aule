import { SectionTitle } from '../Common/SectionTitle'
import { SingleFeature } from './SingleFeature'

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

export const Features = ({
  features,
  title = 'Default Title',
  subTitle = 'Default Sub Title'
}: FeaturesProps) => {
  console.log(features)
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle title={title} paragraph={subTitle} center />
          {features && (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature: Feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
