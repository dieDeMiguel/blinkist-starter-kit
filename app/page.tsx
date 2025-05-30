import Link from "next/link"
import Image from "next/image"
import { PricingCard } from "@/components/pricing-card"
import { SkepticalBanner } from "@/components/skeptical-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src="https://cdn.brandfetch.io/blinkist.com/w/512/h/99/logo?c=1idyyS2Jmw4KgfR-C00"
            alt="Blinkist Logo"
            width={100}
            height={35}
            className="h-6 w-auto"
          />
        </div>
      </header>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <SkepticalBanner />

          <div className="max-w-md mx-auto">
            <PricingCard />
          </div>
        </div>
      </div>
    </main>
  )
}
