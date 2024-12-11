import { CheckCircle } from 'lucide-react'

export default function Division3() {
  const services = [
    "Strategic Consulting",
    "Service Available",
    "Cloud Solutions",
    "Data Analytics",
    "On-line Service"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

