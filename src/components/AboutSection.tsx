import type React from "react"

const AboutSection: React.FC = () => {
  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 30px;
          background: linear-gradient(135deg, #fff5f7 0%, #fde8ee 60%, #f9d6e2 100%);
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181,101,122,0.12) 0%, transparent 70%);
          top: -100px;
          left: -150px;
          z-index: 0;
        }

        .about-section::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181,101,122,0.1) 0%, transparent 70%);
          bottom: -80px;
          right: -100px;
          z-index: 0;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .about-label {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #b5657a;
          margin: 0 0 20px;
        }

        .about-title {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          color: #3d2b2b;
          line-height: 1.1;
          margin: 0 0 60px;
          text-transform: uppercase;
        }

        .about-title .highlight {
          color: #b5657a;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .about-text {
          font-family: "Inter", sans-serif;
          font-size: 17px;
          line-height: 1.8;
          color: #5a3d3d;
          margin: 0;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .stat-card {
          background: #fff;
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          box-shadow: 0 4px 24px rgba(181,101,122,0.10);
          border: 1px solid rgba(181,101,122,0.12);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(181,101,122,0.18);
        }

        .stat-number {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 800;
          color: #b5657a;
          line-height: 1;
          margin: 0 0 10px;
        }

        .stat-suffix {
          font-size: 0.55em;
          font-weight: 700;
        }

        .stat-label {
          font-family: "Inter", sans-serif;
          font-size: 14px;
          color: #7a5a5a;
          line-height: 1.4;
          margin: 0;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid rgba(181,101,122,0.2);
          border-radius: 50px;
          padding: 12px 24px;
          margin-top: 48px;
          box-shadow: 0 2px 12px rgba(181,101,122,0.08);
        }

        .about-badge-icon {
          font-size: 20px;
        }

        .about-badge-text {
          font-family: "Inter", sans-serif;
          font-size: 14px;
          color: #5a3d3d;
          font-weight: 500;
        }

        .about-badge-text strong {
          color: #b5657a;
        }

        @media screen and (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-stats {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (max-width: 767px) {
          .about-section {
            padding: 50px 16px;
          }
          .about-title {
            font-size: clamp(24px, 7vw, 38px);
            margin-bottom: 32px;
          }
          .about-text {
            font-size: 14px;
            line-height: 1.7;
          }
          .about-stats {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .stat-card {
            padding: 24px 16px;
          }
          .stat-number {
            font-size: clamp(26px, 7vw, 38px);
          }
          .stat-label {
            font-size: 12px;
          }
          .about-badge {
            padding: 10px 16px;
            margin-top: 32px;
          }
          .about-badge-text {
            font-size: 12px;
          }
        }

        @media screen and (max-width: 480px) {
          .about-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          <p className="about-label">О нас</p>
          <h2 className="about-title">
            Прямой <span className="highlight">производитель</span> с 2019 года
          </h2>

          <div className="about-grid">
            <p className="about-text">
              Мы являемся прямыми производителями алмазной мозаики и предлагаем продукцию высокого
              качества напрямую от изготовителя — без посредников и переплат.
            </p>
            <p className="about-text">
              За годы работы наши клиенты собрали тысячи готовых картин. Наша официальная группа в
              Одноклассниках зарегистрирована в Роскомнадзоре, что подтверждает нашу прозрачность и
              добросовестность.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <p className="stat-number">
                2019
              </p>
              <p className="stat-label">год основания компании</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">
                20 000<span className="stat-suffix">+</span>
              </p>
              <p className="stat-label">готовых картин собрали наши клиенты</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">
                1 000<span className="stat-suffix">+</span>
              </p>
              <p className="stat-label">отзывов с фотоотчётами</p>
            </div>
          </div>

          <div className="about-badge">
            <span className="about-badge-icon">🏅</span>
            <p className="about-badge-text">
              Группа ВКонтакте / Одноклассники: <strong>59 000+ участников</strong> — зарегистрирована в Роскомнадзоре
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection