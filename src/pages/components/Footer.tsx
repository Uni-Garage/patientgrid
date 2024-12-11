import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1D0F4A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg"
                alt="PatientGrid"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm opacity-90 max-w-md">
              Request a demo for Interction with ur staff
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+91-123456789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+91-4567895478</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>contact@example.com</span>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded-l-full bg-white text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition-colors"
              >
                <span className="sr-only">Subscribe</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              Products
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              Plans
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              More
            </Link>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 text-center text-sm opacity-90">
          © Copyright 2024. Uni-Garage. All Rights Reserved .
        </div>
      </div>
    </footer>
  )
}

