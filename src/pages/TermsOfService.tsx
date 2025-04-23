import React from 'react'
import { Helmet } from 'react-helmet'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - LawLocator.org</title>
        <meta
          name='description'
          content='Read our Terms of Service to understand the rules and guidelines for using LawLocator.org.'
        />
      </Helmet>
      <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>
          Terms of Service
        </h1>

        <div className='prose prose-blue max-w-none'>
          <p className='text-gray-600 mb-6'>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            1. Acceptance of Terms
          </h2>
          <p className='text-gray-600 mb-6'>
            By accessing and using LawLocator.org, you agree to be bound by
            these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            2. Use of Service
          </h2>
          <p className='text-gray-600 mb-4'>You agree to use the service:</p>
          <ul className='list-disc pl-6 text-gray-600 mb-6'>
            <li>Only for lawful purposes</li>
            <li>In accordance with these terms</li>
            <li>Without violating any third-party rights</li>
          </ul>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            3. User Content
          </h2>
          <p className='text-gray-600 mb-4'>
            When you contribute content to LawLocator.org:
          </p>
          <ul className='list-disc pl-6 text-gray-600 mb-6'>
            <li>You retain ownership of your content</li>
            <li>
              You grant us a license to use, modify, and display your content
            </li>
            <li>You are responsible for the accuracy of your content</li>
          </ul>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            4. Disclaimer
          </h2>
          <p className='text-gray-600 mb-6'>
            The information provided on LawLocator.org is for general
            informational purposes only and should not be considered legal
            advice. We make no warranties about the accuracy or completeness of
            the information.
          </p>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            5. Limitation of Liability
          </h2>
          <p className='text-gray-600 mb-6'>
            LawLocator.org shall not be liable for any damages arising from the
            use or inability to use the service.
          </p>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            6. Changes to Terms
          </h2>
          <p className='text-gray-600 mb-6'>
            We reserve the right to modify these terms at any time. Your
            continued use of the service constitutes acceptance of any changes.
          </p>

          <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>
            7. Contact Information
          </h2>
          <p className='text-gray-600 mb-6'>
            For questions about these Terms of Service, please contact us at{' '}
            <a
              href='mailto:terms@lawlocator.org'
              className='text-blue-600 hover:underline'
            >
              terms@lawlocator.org
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
