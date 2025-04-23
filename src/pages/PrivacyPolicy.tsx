import React from 'react'
import { Helmet } from 'react-helmet'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - LawLocator.org</title>
        <meta
          name='description'
          content='Read our Privacy Policy to understand how LawLocator.org collects, uses, and protects your personal information.'
        />
      </Helmet>
      <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>
          Privacy Policy
        </h1>

        <div className='prose prose-blue max-w-none'>
          <p className='text-gray-600 mb-6'>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            1. Information We Collect
          </h2>
          <p className='text-gray-600 mb-4'>
            We collect information that you provide directly to us, including:
          </p>
          <ul className='list-disc pl-6 text-gray-600 mb-6'>
            <li>Search queries and preferences</li>
            <li>Contact information when you reach out to us</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            2. How We Use Your Information
          </h2>
          <p className='text-gray-600 mb-4'>
            We use the information we collect to:
          </p>
          <ul className='list-disc pl-6 text-gray-600 mb-6'>
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries</li>
            <li>Send you updates and notifications</li>
            <li>Analyze usage patterns to enhance user experience</li>
          </ul>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            3. Information Sharing
          </h2>
          <p className='text-gray-600 mb-4'>
            We do not sell or share your personal information with third parties
            except:
          </p>
          <ul className='list-disc pl-6 text-gray-600 mb-6'>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
          </ul>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            4. Data Security
          </h2>
          <p className='text-gray-600 mb-6'>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or destruction.
          </p>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            5. Your Rights
          </h2>
          <p className='text-gray-600 mb-4'>You have the right to:</p>
          <ul className='list-disc pl-6 text-gray-600 mb-6'>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of communications</li>
          </ul>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            6. Contact Us
          </h2>
          <p className='text-gray-600 mb-6'>
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
            <a
              href='mailto:privacy@lawlocator.org'
              className='text-blue-600 hover:underline'
            >
              privacy@lawlocator.org
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
