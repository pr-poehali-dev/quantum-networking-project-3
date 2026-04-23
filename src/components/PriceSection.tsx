import type React from "react"

const PRICES: [string, string][] = [
  ["30×40", "1 990 руб."],
  ["40×40", "2 390 руб."],
  ["40×60", "2 990 руб."],
  ["50×50", "2 990 руб."],
  ["50×70", "3 490 руб."],
  ["50×40", "2 790 руб."],
  ["60×60", "3 490 руб."],
  ["60×80", "4 390 руб."],
  ["70×70", "4 390 руб."],
  ["80×80", "5 390 руб."],
  ["80×120", "7 690 руб."],
  ["100×100", "7 300 руб."],
]

const PriceSection: React.FC = () => (
  <section className="price-section" id="prices">
    <div className="price-container">
      <p className="price-top-title">Алмазная мозаика по фото</p>
      <div className="price-divider"></div>
      <h2 className="price-main-title">Прайс-лист</h2>
      <div className="price-divider-bottom"></div>
      <div>
        {PRICES.map(([size, price]) => (
          <div className="price-row" key={size}>
            <span className="size-col">{size}</span>
            <div className="gold-bar"></div>
            <span className="price-col">{price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default PriceSection
