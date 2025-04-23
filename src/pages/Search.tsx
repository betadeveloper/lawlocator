import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { SearchIcon, FilterIcon } from 'lucide-react'
import { mockLaws } from '../data/mockData'
export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [filteredResults, setFilteredResults] = useState(mockLaws)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const results = mockLaws.filter((law) => {
      const matchesSearch =
        law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        !selectedCategory || law.category === selectedCategory
      const matchesCountry = !selectedCountry || law.country === selectedCountry
      return matchesSearch && matchesCategory && matchesCountry
    })
    setFilteredResults(results)
  }
  return (
    <>
      <Helmet>
        <title>Search Local Laws | LawLocator.org</title>
        <meta
          name='description'
          content='Search and find simplified explanations of local laws and regulations from around the world. Get clear, straightforward answers about legal rules in different countries.'
        />
        <meta
          property='og:title'
          content='Search Local Laws | LawLocator.org'
        />
        <meta
          property='og:description'
          content='Find simplified explanations of local laws and regulations from around the world.'
        />
      </Helmet>
      <main className='min-h-screen bg-gray-50 px-4 py-8'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Search Local Laws</h1>
          <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
            <form onSubmit={handleSearch} className='space-y-4'>
              <div className='relative'>
                <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  type='text'
                  placeholder='Search laws by keyword, topic, or location...'
                  className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 placeholder-gray-400'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className='flex gap-4'>
                <select
                  className='flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-gray-700 bg-white cursor-pointer'
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value=''>All Categories</option>
                  <option value='noise'>Noise Regulations</option>
                  <option value='business'>Business Hours</option>
                  <option value='alcohol'>Alcohol Sales</option>
                  {/* Add more categories */}
                </select>
                <select
                  className='flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-gray-700 bg-white cursor-pointer'
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value=''>All Countries</option>
                  <option value='US'>United States</option>
                  <option value='UK'>United Kingdom</option>
                  <option value='JP'>Japan</option>
                  {/* Add more countries */}
                </select>
                <button
                  type='submit'
                  className='px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 font-medium shadow-sm hover:shadow-md'
                >
                  <FilterIcon className='h-4 w-4' />
                  Apply Filters
                </button>
              </div>
            </form>
          </div>
          <div className='space-y-4'>
            {filteredResults.map((law, index) => (
              <div key={index} className='bg-white rounded-lg shadow-sm p-6'>
                <div className='flex items-start justify-between'>
                  <div>
                    <h2 className='text-xl font-semibold mb-2'>{law.title}</h2>
                    <p className='text-gray-600 mb-4'>{law.description}</p>
                    <div className='flex items-center gap-4 text-sm text-gray-500'>
                      <span>{law.location}</span>
                      <span>Last updated: {law.lastUpdated}</span>
                    </div>
                  </div>
                  <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                    {law.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
