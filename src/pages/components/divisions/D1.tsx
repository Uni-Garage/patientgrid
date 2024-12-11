import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Division1() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Innovation Hub for Medic</h2>
          <p className="text-xl text-gray-600 mb-8">Discover cutting-edge solutions that drive your life forward.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center">
            Explore Innovations from Ancient
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Innovation Hub"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

