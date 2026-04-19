import type React from "react"

const HeroRightPanel: React.FC = () => (
  <div className="right-part">
    <div className="particles-container">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 15}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
    <div className="bg-line">
      <img
        src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
        alt="Line"
        style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
      />
      <img
        src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
        alt="Line"
        style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
      />
    </div>
    <div className="bg-dash-circle">
      <img
        src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
        alt="dash-circle"
        style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
      />
    </div>
    <img
      className="hero-image"
      src="https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/fcde98d6-da98-4322-b430-4ba44d88c34b.png"
      alt="Алмазная мозаика"
    />
  </div>
)

export default HeroRightPanel
