import { FeaturesProps, Feature } from '@/data/types/Features'

import { SectionTitle } from '../Common/SectionTitle'
import { SingleFeature } from './SingleFeature'

export const Features = ({
  features,
  title = 'Assessoria Gratuita em Viagens',
  subTitle = 'Navegue pelo mundo dos ares com a confiança e o suporte da nossa assessoria especializada. Transformamos cada etapa da sua viagem em uma experiência descomplicada e memorável.'
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
