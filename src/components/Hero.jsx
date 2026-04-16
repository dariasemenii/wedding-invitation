import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__date-label">15 · Серпня · 2026</p>

      <h1 className="hero__names">
        Вадим
        <span>&amp;</span>
        Дар&#x2019;я
      </h1>

      <div className="hero__divider">✦</div>

      <p className="hero__announce">
        З радістю повідомляємо,<br />
        що ми вирішили одружитись
      </p>

      <p className="hero__details">
        Ми хочемо, щоб у цей особливий день<br />
        поруч були ті, кого ми любимо.<br />
        Тому з радістю та щирим серцем<br />
        запрошуємо Вас на наше весілля!
      </p>

      <div className="hero__scroll-hint">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate attributeName="cy" values="8;14;8" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
        Scroll
      </div>
    </section>
  )
}
