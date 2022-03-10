import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-white sm:h-20 py-5 border-b sm:sticky top-0 z-10">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <a href="/">
            <img src="/react-bricks-logo.svg" className="w-48" alt="React Bricks" />
          </a>
          <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/about-us" prefetch={true}>
              <a className="text-gray-500 hover:text-pink-700">About us</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-500 hover:text-pink-700">Snipcart Demo</a>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  </header>
)

export default Header
