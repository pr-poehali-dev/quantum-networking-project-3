import type React from "react"

const PriceCtaSection: React.FC = () => {
  return (
    <>
      <style>{`
        .price-section {
          padding: 80px 20px;
          position: relative;
          z-index: 1;
          background-color: #f0e4e8;
        }

        .price-container {
          max-width: 680px;
          margin: 0 auto;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(181, 101, 122, 0.2);
          border-radius: 24px;
          padding: 50px 50px;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .price-top-title {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(13px, 2vw, 16px);
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #9a7a7a;
          margin: 0 0 12px;
        }

        .price-divider {
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
          margin: 0 auto 20px;
        }

        .price-main-title {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(32px, 6vw, 54px);
          font-weight: 700;
          color: #3d2b2b;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0 0 24px;
        }

        .price-divider-bottom {
          width: 180px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
          margin: 0 auto 36px;
        }

        .price-table {
          width: 100%;
          border-collapse: collapse;
        }

        .price-row {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(181, 101, 122, 0.12);
        }

        .price-row:last-child {
          border-bottom: none;
        }

        .size-col {
          width: 160px;
          text-align: right;
          padding-right: 30px;
          font-family: "Montserrat", sans-serif;
          font-size: clamp(16px, 2.5vw, 20px);
          color: #5a3d3d;
          font-weight: 400;
        }

        .gold-bar {
          width: 2px;
          background: linear-gradient(180deg, transparent, #c9a84c, transparent);
          height: 28px;
          flex-shrink: 0;
        }

        .price-col {
          width: 160px;
          text-align: left;
          padding-left: 30px;
          font-family: "Montserrat", sans-serif;
          font-size: clamp(16px, 2.5vw, 20px);
          color: #3d2b2b;
          font-weight: 600;
        }

        .price-note {
          margin-top: 36px;
          font-family: "Montserrat", sans-serif;
          font-size: clamp(14px, 2vw, 17px);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9a7a7a;
          line-height: 1.6;
        }

        .cta-section {
          padding: 120px 30px;
          background-color: #edd8de;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #e8a4b0;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          color: #3d2b2b;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(80px, 12vw, 160px);
          line-height: 0.8;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .cta-subtitle {
          color: #b5657a;
          font-family: "Montserrat";
          font-size: 26px;
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: #b5657a;
          color: #fff;
          text-decoration: none;
          font-family: "Montserrat";
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid #b5657a;
        }

        .cta-button:hover {
          background: transparent;
          color: #b5657a;
        }

        .cta-button.secondary {
          background: transparent;
          color: #3d2b2b;
          border: 2px solid #3d2b2b;
        }

        .cta-button.secondary:hover {
          background: transparent;
          color: #b5657a;
          border: 2px solid #b5657a;
        }

        @media screen and (max-width: 1199px) {
          .cta-section {
            padding: 80px 20px;
          }
          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .cta-section {
            padding: 60px 16px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
          .price-container {
            padding: 36px 20px;
          }
          .size-col,
          .price-col {
            width: 130px;
          }
        }
      `}</style>

      <section className="price-section" id="prices">
        <div className="price-container">
          <p className="price-top-title">Алмазная мозаика по фото</p>
          <div className="price-divider"></div>
          <h2 className="price-main-title">Прайс-лист</h2>
          <div className="price-divider-bottom"></div>
          <div>
            {[
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
            ].map(([size, price]) => (
              <div className="price-row" key={size}>
                <span className="size-col">{size}</span>
                <div className="gold-bar"></div>
                <span className="price-col">{price}</span>
              </div>
            ))}
          </div>
          <p className="price-note">Есть ещё размеры —<br />уточняйте в личные сообщения</p>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="cta-container">
          <h2 className="cta-title text-center">Заказать мозаику</h2>
          <p className="cta-subtitle">
            Присылайте фото в WhatsApp/Telegram/МАХ +7-952-067-20-14 или пишите в личные сообщения. Макет бесплатно!
          </p>
          <div className="cta-buttons">
            <a href="https://ok.ru/group/56567832182852/messages" target="_blank" rel="noopener noreferrer" className="cta-button">
              Заказать макет
            </a>
            <a href="https://ok.ru/oplatatovaх" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              Наше сообщество
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default PriceCtaSection
