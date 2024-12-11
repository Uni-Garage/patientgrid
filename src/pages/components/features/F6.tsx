import { HeadphonesIcon } from 'lucide-react'

export default function FeatureSupport() {
  return (
    <div className="flex flex-col items-center text-center">
      <HeadphonesIcon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
      <p className="text-gray-600">Our dedicated team is always available to assist you.</p>
    </div>
  )
}

