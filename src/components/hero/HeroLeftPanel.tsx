import type React from "react"
import { useState, useEffect } from "react"

const VISITS_URL = "https://functions.poehali.dev/e4addbee-a509-4b12-be37-13fd23afd252"
const TEXTS = ["МОЗАИКУ ПО ЛЮБОМУ ФОТО", "ШЕДЕВР ИЗ ВАШЕГО ФОТО"]

const HeroLeftPanel: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [visitCount, setVisitCount] = useState<number | null>(null)

  useEffect(() => {
    fetch(VISITS_URL, { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        const raw = typeof data === "string" ? JSON.parse(data) : data
        setVisitCount(raw.count)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = TEXTS[currentIndex]

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
          setCurrentIndex((prev) => (prev + 1) % TEXTS.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting])

  return (
    <div className="left-part">
      <h1>
        <span className="d-flex">
          {["С", "О", "З", "Д", "А", "Й", "Т", "Е"].map((char, index) => (
            <span
              key={index}
              className="char tracking-tighter"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="text tracking-tighter">{currentText}</span>
      </h1>

      <p className="tracking-widest">
        Превратите любимое фото в алмазную мозаику. Бесплатный макет — оплата только после вашего одобрения!
      </p>

      <a
        href="https://ok.ru/group/56567832182852/messages"
        target="_blank"
        rel="noopener noreferrer"
        className="max-link ok-link"
      >
        <svg className="max-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#f7931e" />
          <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="15">ОК</text>
        </svg>
        Заказать макет в Одноклассниках
      </a>

      <a
        href="https://link.ok.ru/AmUO1"
        target="_blank"
        rel="noopener noreferrer"
        className="max-link"
      >
        <svg className="max-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="#fff" />
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#0077ff" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="16">MAX</text>
        </svg>
        Заказать макет в МАХ прямо сейчас
      </a>

      <a
        href="https://max.ru/join/g-_QgLbtsNMRSSC2YYAOJzEQiZfCxnGQjGP65dGrA0c"
        target="_blank"
        rel="noopener noreferrer"
        className="free-delivery-banner"
      >
        <span className="free-delivery-icon">🚚</span>
        <span className="free-delivery-text">
          БЕСПЛАТНАЯ ДОСТАВКА
          <br />
          <span className="free-delivery-sub">подписчикам группы МАХ</span>
        </span>
        <span className="free-delivery-arrow">→</span>
      </a>

      {visitCount !== null && (
        <div className="visit-counter">
          <div className="visit-counter-dot" />
          <p className="visit-counter-text">
            Нас посетили <span>{visitCount.toLocaleString("ru-RU")}</span> раз
          </p>
        </div>
      )}
    </div>
  )
}

export default HeroLeftPanel
