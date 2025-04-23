import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

const Layout = ({
  children,
  title = 'LawLocator.org - Find Local Laws and Regulations',
  description = 'Navigate local laws and regulations around the world with simple, clear explanations. Find what you need, when you need it.',
}: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://lawlocator.org' />
        <link rel='canonical' href='https://lawlocator.org' />
      </Helmet>
      <div className='min-h-screen bg-gray-50'>
        <div className='pt-16'>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
