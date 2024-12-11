import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Medical Software To Attract And Retain Patients
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Patientgrids communication platform helps improve patient experience while staff hours.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 bg-[#1D0F4A] text-white rounded-full text-lg font-semibold hover:bg-[#2d1875] transition-colors"
          >
            Start For Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      {/* Diagonal shape */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 md:h-48"
        style={{
          background: '#1D0F4A',
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
        }}
      />
    </section>
  )
}

