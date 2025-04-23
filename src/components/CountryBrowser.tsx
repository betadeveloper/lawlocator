import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon, GlobeIcon } from 'lucide-react';
import { Button } from './ui/button';
const countries = [{
  code: 'US',
  name: 'United States',
  cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  flag: 'https://flagcdn.com/us.svg'
}, {
  code: 'JP',
  name: 'Japan',
  cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo'],
  flag: 'https://flagcdn.com/jp.svg'
}, {
  code: 'GB',
  name: 'United Kingdom',
  cities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Glasgow'],
  flag: 'https://flagcdn.com/gb.svg'
}, {
  code: 'AU',
  name: 'Australia',
  cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  flag: 'https://flagcdn.com/au.svg'
}, {
  code: 'DE',
  name: 'Germany',
  cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
  flag: 'https://flagcdn.com/de.svg'
}, {
  code: 'CA',
  name: 'Canada',
  cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
  flag: 'https://flagcdn.com/ca.svg'
}, {
  code: 'FR',
  name: 'France',
  cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'],
  flag: 'https://flagcdn.com/fr.svg'
}, {
  code: 'IT',
  name: 'Italy',
  cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Florence'],
  flag: 'https://flagcdn.com/it.svg'
}];
const CountryBrowser = () => {
  const navigate = useNavigate();
  const handleCountryClick = (country: (typeof countries)[0]) => {
    navigate(`/search?country=${country.code}`);
  };
  const handleCityClick = (country: (typeof countries)[0], city: string) => {
    navigate(`/search?country=${country.code}&city=${encodeURIComponent(city)}`);
  };
  return <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GlobeIcon className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Browse by Country</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map(country => <div key={country.code} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <button onClick={() => handleCountryClick(country)} className="w-full p-4 flex items-center gap-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <img src={country.flag} alt={`${country.name} flag`} className="w-8 h-6 rounded shadow-sm object-cover" />
                <span className="font-medium flex-1 text-left">
                  {country.name}
                </span>
                <ChevronRightIcon className="h-4 w-4 text-gray-400" />
              </button>
              <div className="p-3">
                <ul className="space-y-1">
                  {country.cities.map((city, cityIndex) => <li key={cityIndex}>
                      <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50" onClick={() => handleCityClick(country, city)}>
                        {city}
                      </Button>
                    </li>)}
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-sm text-blue-600 hover:bg-blue-50" onClick={() => handleCountryClick(country)}>
                      View all cities →
                    </Button>
                  </li>
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CountryBrowser;