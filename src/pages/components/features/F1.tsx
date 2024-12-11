import { Zap, Shield, Star } from 'lucide-react'
import FeatureAnalytics from './F2'
import FeatureCustomization from './F3'
import FeatureSupport from './F4'
import FeatureIntegration from './F5'
import FeatureScalability from './F6'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Our solutions are optimized for speed and efficiency.',
  },
  {
    icon: Shield,
    title: 'Secure',
    description: 'We prioritize the security of your data and information.',
  },
  {
    icon: Star,
    title: 'Top Quality',
    description: 'We deliver nothing but the best quality in our services.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
          <FeatureAnalytics />
          <FeatureCustomization />
          <FeatureSupport />
          <FeatureIntegration />
          <FeatureScalability />
        </div>
      </div>
    </section>
  )
}

