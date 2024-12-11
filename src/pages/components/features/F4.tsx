import { Link } from 'lucide-react'

export default function FeatureIntegration() {
  return (
    <div className="flex flex-col items-center text-center">
      <Link className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Integration</h3>
      <p className="text-gray-600">Seamlessly integrate our platform with your existing staff and workflows.</p>
    </div>
  )
}

