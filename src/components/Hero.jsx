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
    </section>
  )
}
