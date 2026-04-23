import type React from "react"
import { useState } from "react"

const CALLBACK_URL = "https://functions.poehali.dev/bd453b74-7d83-4ef1-8335-07a2a33b1885"

const PriceCtaSection: React.FC = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(CALLBACK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

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
          font-size: clamp(40px, 10vw, 160px);
          line-height: 0.9;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .cta-subtitle {
          color: #b5657a;
          font-family: "Montserrat";
          font-size: clamp(15px, 2.5vw, 26px);
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

        .contact-section {
          padding: 80px 30px;
          background-color: #f0e4e8;
        }

        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-title {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(28px, 6vw, 48px);
          font-weight: 700;
          color: #3d2b2b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 12px;
        }

        .contact-subtitle {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          color: #9a7a7a;
          line-height: 1.6;
          margin: 0 0 40px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          padding: 16px 24px;
          border: 2px solid rgba(181,101,122,0.25);
          border-radius: 16px;
          font-family: "Montserrat", sans-serif;
          font-size: 15px;
          color: #3d2b2b;
          background: rgba(255,255,255,0.8);
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #b5657a;
          background: #fff;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #b5a0a0;
        }

        .contact-textarea {
          resize: vertical;
          min-height: 120px;
          border-radius: 16px;
        }

        .contact-submit {
          padding: 18px 40px;
          background: #b5657a;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.06em;
        }

        .contact-submit:hover:not(:disabled) {
          background: #9a4d62;
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-success {
          font-family: "Montserrat", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #b5657a;
          padding: 30px;
          background: rgba(255,255,255,0.8);
          border-radius: 20px;
          line-height: 1.6;
        }

        .contact-error {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          color: #c0392b;
          margin: 0;
        }

        .contact-divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
          margin: 0 auto 40px;
        }

        @media screen and (max-width: 767px) {
          .contact-section {
            padding: 44px 16px;
          }
          .contact-input,
          .contact-textarea {
            padding: 14px 18px;
            font-size: 14px;
          }
          .contact-submit {
            font-size: 14px;
            padding: 14px 24px;
          }
        }

        .cta-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: 420px;
          margin: 0 auto;
        }

        .cta-input {
          width: 100%;
          padding: 16px 24px;
          border: 2px solid rgba(181,101,122,0.3);
          border-radius: 50px;
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          color: #3d2b2b;
          background: rgba(255,255,255,0.7);
          outline: none;
          transition: border-color 0.2s ease;
          text-align: center;
        }

        .cta-input:focus {
          border-color: #b5657a;
          background: rgba(255,255,255,0.95);
        }

        .cta-input::placeholder {
          color: #b5a0a0;
        }

        .cta-success {
          font-family: "Montserrat", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #b5657a;
          padding: 30px;
          background: rgba(255,255,255,0.7);
          border-radius: 20px;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cta-error {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          color: #c0392b;
          margin: 0;
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
          .price-section {
            padding: 44px 16px;
          }
          .price-container {
            padding: 24px 16px;
            border-radius: 16px;
          }
          .price-top-title {
            font-size: 11px;
            letter-spacing: 0.2em;
            margin-bottom: 8px;
          }
          .price-main-title {
            font-size: clamp(22px, 6vw, 32px);
            letter-spacing: 0.08em;
          }
          .price-row {
            padding: 9px 0;
          }
          .size-col,
          .price-col {
            width: auto;
            flex: 1;
            font-size: 15px;
            padding-left: 12px;
            padding-right: 12px;
          }
          .cta-section {
            padding: 44px 20px;
          }
          .cta-title {
            font-size: clamp(28px, 9vw, 48px);
            line-height: 1;
            margin: 0 0 14px;
          }
          .cta-subtitle {
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 28px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .cta-button {
            width: 100%;
            max-width: 320px;
            padding: 14px 20px;
            font-size: 14px;
            letter-spacing: 0.04em;
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

        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="cta-container">
          <h2 className="cta-title text-center">Заказать мозаику</h2>
          <p className="cta-subtitle">
            Присылайте фото в WhatsApp/Telegram/МАХ +7-952-067-20-14 или пишите в личные сообщения. Макет бесплатно!
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button">
              Оставить заявку
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="contact-title">Обратная связь</h2>
          <div className="contact-divider"></div>
          <p className="contact-subtitle">
            Есть вопросы? Заполните форму — мы свяжемся с вами в ближайшее время
          </p>

          {status === "success" ? (
            <div className="contact-success">
              Спасибо! Мы получили ваше сообщение и свяжемся с вами в ближайшее время 🌸
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                className="contact-input"
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="contact-input"
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <textarea
                className="contact-textarea"
                placeholder="Ваш вопрос или комментарий (необязательно)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="contact-submit" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Отправляем..." : "Отправить сообщение"}
              </button>
              {status === "error" && (
                <p className="contact-error">Не удалось отправить. Позвоните нам: +7-952-067-20-14</p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export default PriceCtaSection