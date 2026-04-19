import type React from "react"

const photos = [
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/0b3d069d-5388-4eb9-9a30-b5b395498707.jpg",
    label: "Три портрета детей",
  },
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/4c297a62-2d5c-4108-9745-b235404aa347.jpg",
    label: "Чёрно-белый портрет пары",
  },
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/1352442b-d90c-483f-84d9-5103f4269638.jpg",
    label: "Портрет внука в рамочке",
  },
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/8ec66ce3-adfc-4801-bbdc-22e10abc136b.jpg",
    label: "Три портрета в золотых рамках",
  },
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/9e056594-7f1a-48ff-abe8-8533993e5f52.jpg",
    label: "Мужской портрет на кирпичной стене",
  },
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/859aa9c2-a356-40e7-a97d-75dca64119e1.jpg",
    label: "Портрет девочки",
  },
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/4e9034ed-779c-4d5d-8285-95a7fe6ba6d3.jpg",
    label: "Портрет военного в рамке",
  },
  {
    url: "https://cdn.poehali.dev/projects/28e6e3c4-9ab2-48cb-8301-9024486fcf9f/bucket/fbc2617f-3e1c-4d37-a044-27bc36ee9dc3.jpg",
    label: "Портрет пары в рамке",
  },
]

const GallerySection: React.FC = () => {
  const doubled = [...photos, ...photos]

  return (
    <>
      <style>{`
        .gallery-section {
          padding: 80px 0;
          background-color: #f5ede8;
          overflow: hidden;
          position: relative;
        }

        .gallery-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.25;
          background: #e8a4b0;
          filter: blur(120px);
          height: 50%;
          width: 40%;
          position: absolute;
          top: 50%;
          right: -20%;
          transform: translateY(-50%);
          z-index: 0;
        }

        .gallery-title {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 6vw, 80px);
          color: #3d2b2b;
          text-transform: uppercase;
          text-align: center;
          margin: 0 0 60px;
          line-height: 0.9;
          position: relative;
          z-index: 1;
        }

        .gallery-title span {
          color: #b5657a;
        }

        .gallery-track-wrapper {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .gallery-track-wrapper::before,
        .gallery-track-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .gallery-track-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #f5ede8, transparent);
        }

        .gallery-track-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #f5ede8, transparent);
        }

        .gallery-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: galleryScroll 35s linear infinite;
        }

        .gallery-track:hover {
          animation-play-state: paused;
        }

        @keyframes galleryScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .gallery-card {
          flex-shrink: 0;
          width: 300px;
          height: 360px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 32px rgba(181, 101, 122, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .gallery-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 48px rgba(181, 101, 122, 0.25);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.05);
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(61, 43, 43, 0.55) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }

        .gallery-card-label {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media screen and (max-width: 767px) {
          .gallery-section {
            padding: 60px 0;
          }
          .gallery-card {
            width: 220px;
            height: 270px;
          }
          .gallery-track-wrapper::before,
          .gallery-track-wrapper::after {
            width: 60px;
          }
        }
      `}</style>

      <section className="gallery-section">
        <h2 className="gallery-title">
          Работы <span>наших клиентов</span>
        </h2>
        <div className="gallery-track-wrapper">
          <div className="gallery-track">
            {doubled.map((photo, i) => (
              <div className="gallery-card" key={i}>
                <img src={photo.url} alt={photo.label} />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-label">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GallerySection