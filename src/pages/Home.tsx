import Hero from '@/components/Hero'
import PopularSearches from '@/components/PopularSearches'
import BenefitsSection from '@/components/BenefitsSection'
import CategoryBrowser from '@/components/CategoryBrowser'
import CountryBrowser from '@/components/CountryBrowser'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LawLocator.org - Find Local Laws and Regulations</title>
        <meta
          name='description'
          content='Find simplified explanations of local laws and regulations from around the world. Get clear, straightforward answers about rules in different countries.'
        />
      </Helmet>
      <Hero />
      <PopularSearches />
      <BenefitsSection />
      <CategoryBrowser />
      <CountryBrowser />
    </>
  )
}
