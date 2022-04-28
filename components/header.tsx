import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-gray-800 py-4 sm:h-20 sm:sticky top-0 z-10">
    <div className="max-w-screen-xl mx-auto">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <a href="/">
            <img src="/mdwp-logo.jpeg" className="rounded h-12" alt="mdwp Bricks" />
          </a>
          <div id="search" className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/about-us">
              <a className="text-gray-200 hover:text-lime-600">About us</a>
            </Link>
            <Link href="/bricks">
              <a className="text-gray-200 hover:text-lime-600">Bricks</a>
            </Link>
            <Link href="/airtable">
              <a className="text-gray-200 hover:text-lime-600">Airtable Integration</a>
            </Link>
            <Link href="/directus">
              <a className="text-gray-200 hover:text-lime-600">Directus Integration</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-200 hover:text-lime-600">Snipcart Demo</a>
            </Link>
            <Link href="/algolia">
              <a className="text-gray-200 hover:text-lime-600">Algolia/Snipcart Demo</a>
            </Link>
            <Link href="/commerce-template">
              <a className="text-gray-200 hover:text-lime-600">Snipcart Grid</a>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  </header>
)

export default Header
