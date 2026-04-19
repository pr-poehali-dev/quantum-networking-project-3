import type React from "react"

const FeaturesSection: React.FC = () => {
  return (
    <>
      <style>{`
        .features-section {
          padding: 100px 30px;
          background-color: #f0e4e8;
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #e8a4b0;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #3d2b2b;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 4.5vw, 64px);
          line-height: 1.05;
          margin: 0 0 20px;
          text-transform: uppercase;
        }

        .features-content h2 .highlight {
          color: #b5657a;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: #b5657a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          flex-shrink: 0;
        }

        .feature-text h3 {
          color: #3d2b2b;
          font-family: "Montserrat";
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .feature-text p {
          color: #7a5a5a;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
          line-height: 1.6;
        }

        @media screen and (max-width: 1199px) {
          .features-section {
            padding: 80px 20px;
          }
          .features-container {
            gap: 40px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section {
            padding: 44px 20px;
          }
          .features-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .features-content h2 {
            font-size: clamp(24px, 7vw, 36px);
            line-height: 1.1;
            margin: 0 0 10px;
          }
          .feature-item {
            padding: 16px 0;
            gap: 14px;
          }
          .feature-icon {
            width: 40px;
            height: 40px;
            font-size: 14px;
            flex-shrink: 0;
          }
          .feature-text h3 {
            font-size: 15px;
            line-height: 1.3;
          }
          .feature-text p {
            font-size: 14px;
            line-height: 1.6;
          }
        }
      `}</style>

      <section className="features-section">
        <div className="features-container">
          <div className="features-content">
            <h2>Почему <span className="highlight">выбирают</span> нас?</h2>
          </div>
          <ul className="features-list">
            <li className="feature-item">
              <div className="feature-icon">01</div>
              <div className="feature-text">
                <h3>Бесплатный макет</h3>
                <p className="font-light tracking-wider">
                  Вы видите результат до оплаты — полный контроль над вашим заказом
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">02</div>
              <div className="feature-text">
                <h3>Быстро: 1-2 дня</h3>
                <p className="tracking-wider">
                  Макет готов уже через 1-2 дня — быстро увидите свою будущую картину
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">03</div>
              <div className="feature-text">
                <h3>Круглые или квадратные</h3>
                <p className="tracking-wider">
                  Выбирайте форму страз и размер холста под ваши пожелания
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">04</div>
              <div className="feature-text">
                <h3>Доставка по России</h3>
                <p className="tracking-wider">
                  Отправляем готовый набор и мозаику Почтой России по всей стране
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default FeaturesSection