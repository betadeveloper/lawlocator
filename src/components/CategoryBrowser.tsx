import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from './ui/card'

const categories = [
  { id: 'noise_regulations', name: 'Noise Regulations', icon: '🔊' },
  { id: 'business_hours', name: 'Business Hours', icon: '🕒' },
  { id: 'parking', name: 'Parking Rules', icon: '🅿️' },
  { id: 'alcohol_sales', name: 'Alcohol Sales', icon: '🍷' },
  { id: 'residential', name: 'Residential Rules', icon: '🏠' },
  { id: 'public_safety', name: 'Public Safety', icon: '🚨' },
]

const CategoryBrowser = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (category: (typeof categories)[0]) => {
    navigate(`/search?category=${category.id}`)
    window.scrollTo(0, 0)
  }

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-900'>Browse by Category</h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className='w-full h-full text-left transition-transform hover:scale-[1.02] active:scale-[0.98]'
          >
            <Card className='h-full hover:shadow-lg transition-shadow border-transparent hover:border-blue-100'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center'>
                    <span className='text-2xl'>{category.icon}</span>
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-base font-semibold text-gray-900 truncate'>
                      {category.name}
                    </h3>
                    <p className='text-gray-600 text-sm mt-1'>
                      Find local rules and regulations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryBrowser
