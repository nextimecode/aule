import { Feature } from '@/data/types/Features'

import { SectionTitle } from '../Common/SectionTitle'
import { SingleFeature } from './SingleFeature'

interface FeaturesProps {
  features: Feature[]
  title?: string
  subTitle?: string
}
export const Features = ({
  features,
  title = 'Assessoria Gratuita',
  subTitle = 'Embarque nessa jornada com toda tranquilidade e o suporte da nossa assessoria especializada. Descomplicando todas os tramites para que você tenha uma experiencia memorável.'
}: FeaturesProps) => {
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
