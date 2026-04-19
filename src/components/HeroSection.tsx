import type React from "react"
import { useState, useEffect } from "react"

const VISITS_URL = "https://functions.poehali.dev/e4addbee-a509-4b12-be37-13fd23afd252"

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [visitCount, setVisitCount] = useState<number | null>(null)

  useEffect(() => {
    fetch(VISITS_URL, { method: 'POST' })
      .then(r => r.json())
      .then(data => {
        const raw = typeof data === 'string' ? JSON.parse(data) : data
        setVisitCount(raw.count)
      })
      .catch(() => {})
  }, [])

  const texts = ["МОЗАИКУ ПО ЛЮБОМУ ФОТО", "ШЕДЕВР ИЗ ВАШЕГО ФОТО"]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400&display=swap');

        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }

        .photography-banner {
          margin: 0;
          background-color: #f5ede8;
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.35;
          background: #e8a4b0;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #3d2b2b;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 6vw, 80px);
          line-height: 0.85;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #b5657a;
          display: block;
          height: clamp(60px, 8vw, 90px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 40px 0 0;
          color: #7a2840;
          font-size: clamp(18px, 2.2vw, 26px);
          font-style: normal;
          font-weight: 700;
          line-height: 1.6;
          font-family: "Montserrat";
          opacity: 1;
        }

        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 72px;
          line-height: 1;
          color: #3d2b2b;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Montserrat";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #b5657a;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #b5657a;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link-hint {
          display: none;
        }

        .max-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding: 14px 28px;
          background: #0077ff;
          color: #fff;
          text-decoration: none;
          border-radius: 50px;
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 2px solid #0077ff;
          transition: all 0.3s ease;
        }

        .max-link:hover {
          background: transparent;
          color: #0077ff;
        }

        .ok-link {
          background: #f7931e;
          border-color: #f7931e;
          color: #fff;
        }

        .ok-link:hover {
          background: transparent;
          color: #f7931e;
        }

        .max-icon {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        @media screen and (max-width: 767px) {
          .max-link {
            font-size: 13px;
            padding: 11px 18px;
            gap: 8px;
          }
          .max-icon {
            width: 22px;
            height: 22px;
          }
        }

        .free-delivery-banner {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 18px;
          padding: 14px 22px;
          background: linear-gradient(135deg, #0055cc 0%, #0077ff 100%);
          border-radius: 14px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 18px rgba(0,119,255,0.3);
          max-width: 400px;
        }

        .free-delivery-banner:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,119,255,0.4);
        }

        .free-delivery-icon {
          font-size: 28px;
          flex-shrink: 0;
        }

        .free-delivery-text {
          font-family: "Montserrat", sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.2;
          flex: 1;
        }

        .free-delivery-sub {
          font-size: 12px;
          font-weight: 500;
          text-transform: none;
          opacity: 0.85;
          letter-spacing: 0.02em;
        }

        .free-delivery-arrow {
          font-size: 22px;
          color: #fff;
          opacity: 0.8;
          flex-shrink: 0;
        }

        @media screen and (max-width: 767px) {
          .free-delivery-banner {
            padding: 12px 16px;
            gap: 10px;
            border-radius: 12px;
          }
          .free-delivery-icon {
            font-size: 22px;
          }
          .free-delivery-text {
            font-size: 15px;
          }
          .free-delivery-sub {
            font-size: 11px;
          }
        }

        .visit-counter {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(181,101,122,0.2);
          border-radius: 50px;
          padding: 8px 20px;
          backdrop-filter: blur(8px);
        }

        .visit-counter-dot {
          width: 8px;
          height: 8px;
          background: #b5657a;
          border-radius: 50%;
          animation: pulse-dot 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .visit-counter-text {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #5a3d3d;
          letter-spacing: 0.03em;
        }

        .visit-counter-text span {
          color: #b5657a;
          font-weight: 700;
        }

        @media screen and (max-width: 767px) {
          .visit-counter {
            padding: 7px 14px;
            gap: 8px;
          }
          .visit-counter-text {
            font-size: 12px;
          }
        }

        .book-link .arrow span {
          background-color: #b5657a;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #b5657a;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.35;
          background: #e8a4b0;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(181, 101, 122, 0.4);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(232, 164, 176, 0.35);
        }

        .particle:nth-child(3n) {
          background: rgba(196, 120, 138, 0.25);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 88%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 1;
        }

        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }

          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }

          .bg-line {
            height: 52px;
          }

          .left-part {
            padding: 28px 20px 36px;
            overflow: visible;
          }

          .left-part h1 {
            font-size: clamp(28px, 8vw, 42px);
            line-height: 1;
          }

          .left-part h1 .text {
            height: clamp(52px, 12vw, 72px);
            font-size: clamp(20px, 5.5vw, 34px);
            line-height: 1.2;
          }

          .left-part p {
            font-size: 15px;
            line-height: 1.65;
            width: 100%;
            margin-top: 18px;
            font-weight: 600;
          }

          .book-link {
            font-size: 18px;
            gap: 10px;
            margin-top: 22px;
          }

          .book-link .linktext {
            font-size: 17px !important;
          }

          .book-link .arrow {
            width: 18px;
            height: 18px;
          }

          .max-link {
            font-size: 14px !important;
            padding: 13px 20px !important;
            letter-spacing: 0.02em;
            line-height: 1.3;
          }

          .right-part {
            height: 280px;
            width: 280px;
            margin: 0 auto;
          }

          .bg-dash-circle {
            width: 70px;
          }
        }
      `}</style>

      <section className="info-section">
        <div className="left-part">
          <h1>
            <span className="d-flex">
              {["С", "О", "З", "Д", "А", "Й", "Т", "Е"].map((char, index) => (
                <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <span className="text tracking-tighter">{currentText}</span>
          </h1>
          <p className="tracking-widest">
            Превратите любимое фото в алмазную мозаику. Бесплатный макет — оплата только после вашего одобрения!
          </p>
          <a href="https://ok.ru/group/56567832182852/messages" target="_blank" rel="noopener noreferrer" className="max-link ok-link">
            <svg className="max-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#f7931e"/>
              <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="15">ОК</text>
            </svg>
            Заказать макет в Одноклассниках
          </a>
          <a href="https://link.ok.ru/AmUO1" target="_blank" rel="noopener noreferrer" className="max-link">
            <svg className="max-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="#fff"/>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#0077ff" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="16">MAX</text>
            </svg>
            Заказать макет в МАХ прямо сейчас
          </a>
          <a href="https://max.ru/join/g-_QgLbtsNMRSSC2YYAOJzEQiZfCxnGQjGP65dGrA0c" target="_blank" rel="noopener noreferrer" className="free-delivery-banner">
            <span className="free-delivery-icon">🚚</span>
            <span className="free-delivery-text">БЕСПЛАТНАЯ ДОСТАВКА<br/><span className="free-delivery-sub">подписчикам группы МАХ</span></span>
            <span className="free-delivery-arrow">→</span>
          </a>
          {visitCount !== null && (
            <div className="visit-counter">
              <div className="visit-counter-dot" />
              <p className="visit-counter-text">
                Нас посетили <span>{visitCount.toLocaleString('ru-RU')}</span> раз
              </p>
            </div>
          )}
        </div>
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
      </section>
    </>
  )
}

export default HeroSection