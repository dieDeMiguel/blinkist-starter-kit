import { Check } from "lucide-react"

export function PricingCard() {
  return (
    <div className="rounded-lg border border-blue-500 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-blue-500 text-white py-3 px-4 text-center font-medium">7-DAY FREE TRIAL — €0 TODAY</div>

      {/* Content */}
      <div className="p-6 space-y-6 bg-white">
        {/* Plan title and price */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <h3 className="text-midnight font-bold text-xl">PRO</h3>
              <span className="text-gray-600">- 12 Months</span>
            </div>
            <div className="text-right">
              <div className="flex items-end justify-end">
                <span className="text-sm mt-1">€</span>
                <span className="text-5xl font-bold text-midnight leading-none">0</span>
                <div className="flex flex-col items-start ml-0.5">
                  <span className="text-lg font-bold text-midnight leading-none">.39</span>
                  <span className="text-sm text-gray-600">a day</span>
                </div>
              </div>
              <p className="text-gray-600 mt-1">€139.98</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full py-3 px-4 bg-green-500 rounded-md text-center font-medium text-white hover:bg-green-600 transition-colors">
            Get started
          </button>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <p className="font-medium text-midnight">Reach your goals faster</p>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0L12.7009 6.21885L19.4127 5.87785L14.1941 9.62215L16.1803 16.1222L10 12.5L3.81966 16.1222L5.80589 9.62215L0.587322 5.87785L7.29909 6.21885L10 0Z"
                    fill="#0365F2"
                  />
                </svg>
              </div>
              <div>
                <span className="text-blue-500 font-medium">Blinkist AI:</span>{" "}
                <span className="text-gray-700">Summarize videos, podcasts, docs, articles & more.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Check className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">7,500+ book and podcast summaries.</p>
            </div>

            <div className="flex gap-3 items-start">
              <Check className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Read & listen in 15 min.</p>
            </div>

            <div className="flex gap-3 items-start">
              <Check className="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Personal daily recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
