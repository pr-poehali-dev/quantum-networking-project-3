import type React from "react"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import PriceCtaSection from "@/components/PriceCtaSection"

const PhotographyBanner: React.FC = () => {
  return (
    <div className="photography-banner">
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PriceCtaSection />
      </main>
    </div>
  )
}

export default PhotographyBanner
