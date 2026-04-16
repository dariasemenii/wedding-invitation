import './Hero.css'
import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  return (
    <section className="hero">
      <ParticleCanvas count={55} />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__date-label">15 · Серпня · 2026</p>

        <h1 className="hero__names">
          Вадим
          <span>&amp;</span>
          Дар&#x2019;я
        </h1>

        <div className="hero__divider">✦</div>

        <p className="hero__announce">
          Дорогі рідні та друзі!
        </p>

        <p className="hero__details">
          Є події, які залишаються в пам'яті<br /> на все життя.<br />
          І є люди, з якими хочеться їх розілити!<br />
          <br />
          Ми з радістю запрошуємо вас<br />
          стати частинкою нашого найщасливішого дня!
        </p>
      </div>

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
