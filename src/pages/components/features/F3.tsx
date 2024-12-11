import { Sliders } from 'lucide-react'

export default function FeatureCustomization() {
  return (
    <div className="flex flex-col items-center text-center">
      <Sliders className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Full Customization Organic</h3>
      <p className="text-gray-600">Tailor our solutions to fit your specific needs and preferences.</p>
    </div>
  )
}

