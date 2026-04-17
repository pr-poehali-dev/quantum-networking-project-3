import type React from "react"

const TestimonialsSection: React.FC = () => {
  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 100px 30px;
          background-color: #f5ede8;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #e8a4b0;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #3d2b2b;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
        }

        .testimonials-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 40px;
          width: max-content;
        }

        .testimonials-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(181, 101, 122, 0.2);
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(10px);
          width: 400px;
          flex-shrink: 0;
        }

        .testimonial-quote {
          color: #5a3d3d;
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 30px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          font-family: "Inter", sans-serif;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #b5657a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #fff;
        }

        .author-info h4 {
          color: #b5657a;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
          text-transform: uppercase;
        }

        .author-info p {
          color: #9a7a7a;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          margin: 5px 0 0;
        }

        @media screen and (max-width: 1199px) {
          .testimonials-section {
            padding: 80px 20px;
          }
          .testimonials-marquee {
            gap: 30px;
          }
        }

        @media screen and (max-width: 767px) {
          .testimonials-section {
            padding: 60px 16px;
          }
          .testimonials-marquee {
            gap: 25px;
          }
          .testimonial-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">Отзывы клиентов</h2>
          <div className="testimonials-marquee">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Заказала мозаику с фото дочки — просто восторг! Макет прислали на следующий день, всё согласовали быстро."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ЕМ</div>
                <div className="author-info">
                  <h4>Елена Михайлова</h4>
                  <p>Мама двоих детей</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Подарила мужу мозаику с нашим свадебным фото. Он был в слезах от счастья. Качество превосходное!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">НС</div>
                <div className="author-info">
                  <h4>Наталья Соколова</h4>
                  <p>Постоянный клиент</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Уже третий заказ! Увлекательное хобби и отличный подарок. Рекомендую всем!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ОП</div>
                <div className="author-info">
                  <h4>Ольга Петрова</h4>
                  <p>Мастерица рукоделия</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Заказала мозаику с фото дочки — просто восторг! Макет прислали на следующий день, всё согласовали быстро."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ЕМ</div>
                <div className="author-info">
                  <h4>Елена Михайлова</h4>
                  <p>Мама двоих детей</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Подарила мужу мозаику с нашим свадебным фото. Он был в слезах от счастья. Качество превосходное!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">НС</div>
                <div className="author-info">
                  <h4>Наталья Соколова</h4>
                  <p>Постоянный клиент</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Уже третий заказ! Увлекательное хобби и отличный подарок. Рекомендую всем!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ОП</div>
                <div className="author-info">
                  <h4>Ольга Петрова</h4>
                  <p>Мастерица рукоделия</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection
