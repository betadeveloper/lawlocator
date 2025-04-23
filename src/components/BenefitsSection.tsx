import React from 'react'
import { Clock, Check, Building } from 'lucide-react'

const BenefitsSection = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='bg-white rounded-xl shadow-sm p-8'>
        <h2 className='text-2xl font-bold text-center mb-8'>
          Why Use LawLocator.com?
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='flex flex-col items-center text-center'>
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
              <Clock className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Save Time</h3>
            <p className='text-gray-600'>
              Find answers in seconds instead of hours spent researching complex
              legal texts.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4'>
              <Check className='w-6 h-6 text-green-600' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Verified Information</h3>
            <p className='text-gray-600'>
              All rules are sourced from official government websites and
              regularly updated.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
              <Building className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Local Context</h3>
            <p className='text-gray-600'>
              Rules are explained with local context and practical examples for
              better understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsSection
