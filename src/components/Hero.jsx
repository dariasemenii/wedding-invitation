import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__date-label">14 · June · 2026</p>

      <h1 className="hero__names">
        Sarah
        <span>&amp;</span>
        James
      </h1>

      <div className="hero__divider">✦</div>

      <p className="hero__details">
        Together with their families<br />
        joyfully invite you to celebrate<br />
        their wedding
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
