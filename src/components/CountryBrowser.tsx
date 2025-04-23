import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Globe } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

const countries = [
  {
    name: 'United States',
    cities: ['New York', 'Los Angeles', 'Chicago'],
    flag: '🇺🇸',
  },
  {
    name: 'Japan',
    cities: ['Tokyo', 'Osaka', 'Kyoto'],
    flag: '🇯🇵',
  },
  {
    name: 'United Kingdom',
    cities: ['London', 'Manchester', 'Edinburgh'],
    flag: '🇬🇧',
  },
  {
    name: 'Australia',
    cities: ['Sydney', 'Melbourne', 'Brisbane'],
    flag: '🇦🇺',
  },
  {
    name: 'Germany',
    cities: ['Berlin', 'Munich', 'Hamburg'],
    flag: '🇩🇪',
  },
  {
    name: 'Canada',
    cities: ['Toronto', 'Vancouver', 'Montreal'],
    flag: '🇨🇦',
  },
  {
    name: 'France',
    cities: ['Paris', 'Lyon', 'Marseille'],
    flag: '🇫🇷',
  },
  {
    name: 'Italy',
    cities: ['Rome', 'Milan', 'Naples'],
    flag: '🇮🇹',
  },
]

const CountryBrowser = () => {
  const navigate = useNavigate()

  const handleCountryClick = (country: (typeof countries)[0]) => {
    navigate(`/search?country=${country.name}`)
    window.scrollTo(0, 0)
  }

  const handleCityClick = (country: (typeof countries)[0], city: string) => {
    navigate(`/search?country=${country.name}&city=${encodeURIComponent(city)}`)
    window.scrollTo(0, 0)
  }

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
          <Globe className='mr-2 h-6 w-6 text-blue-600' />
          Browse by Country
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {countries.map((country) => (
            <Card
              key={country.name}
              className='hover:shadow-lg transition-shadow bg-white'
            >
              <CardContent className='p-6'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-2xl'>{country.flag}</span>
                  <h3 className='text-lg font-semibold'>
                    <Button
                      variant='link'
                      className='hover:text-blue-600 text-gray-900 p-0 h-auto'
                      onClick={() => handleCountryClick(country)}
                    >
                      {country.name}
                    </Button>
                  </h3>
                </div>
                <ul className='space-y-1 text-sm text-gray-500'>
                  {country.cities.map((city) => (
                    <li key={city}>
                      <Button
                        variant='link'
                        className='hover:text-blue-600 p-0 h-auto text-sm'
                        onClick={() => handleCityClick(country, city)}
                      >
                        {city} Laws
                      </Button>
                    </li>
                  ))}
                  <li className='pt-1'>
                    <Button
                      variant='link'
                      className='text-blue-600 hover:underline text-xs font-medium p-0 h-auto'
                      onClick={() => handleCountryClick(country)}
                    >
                      View all cities →
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryBrowser
