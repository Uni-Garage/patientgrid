import Image from 'next/image'
import { Users } from 'lucide-react'
import React from 'react'

export default function Division2() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mt-10 md:mt-0 md:pr-10">
          <Image
            src="/placeholder.svg"
            alt="Our Team"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Expert Team</h2>
          <p className="text-xl text-gray-600 mb-8">Meet the professionals dedicated to your Health success.</p>
          <div className="flex items-center text-blue-600">
            <Users className="h-8 w-8 mr-3" />
            <span className="text-lg font-semibold">50+ Department Experts</span>
          </div>
        </div>
      </div>
    </section>
  )
}

