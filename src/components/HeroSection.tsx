import type React from "react"
import HeroStyles from "@/components/hero/HeroStyles"
import HeroLeftPanel from "@/components/hero/HeroLeftPanel"
import HeroRightPanel from "@/components/hero/HeroRightPanel"

const HeroSection: React.FC = () => (
  <>
    <HeroStyles />
    <section className="info-section">
      <HeroLeftPanel />
      <HeroRightPanel />
    </section>
  </>
)

export default HeroSection
