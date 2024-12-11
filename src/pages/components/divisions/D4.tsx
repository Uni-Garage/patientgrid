import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Division4() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">Client Success Stories</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md max-w-sm">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg"
                  alt={`Client ${index + 1}`}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">Client Name</h3>
                  <p className="text-gray-600">Treatment</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4"> thanks</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

