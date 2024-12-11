'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image
                src="/placeholder.svg"
                alt="Patientgrid Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-gray-900">patientgrid</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Products
            </Link>
            <Link 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Plans
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                  <Link 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Support
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="#" 
              className="hidden md:inline-block text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="#" 
              className="inline-block px-6 py-2 bg-[#1D0F4A] text-white rounded-full hover:bg-[#2d1875] transition-colors"
            >
              Request a demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

