import { BarChart } from 'lucide-react'

export default function FeatureAnalytics() {
  return (
    <div className="flex flex-col items-center text-center">
      <BarChart className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Analytics</h3>
      <p className="text-gray-600">Gain valuable insights with our powerful analytics tools and Doctors.</p>
    </div>
  )
}

