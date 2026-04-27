import './WeddingDateDecor.css'

export default function WeddingDateDecor() {
  return (
    <div className="wd-bg" aria-hidden="true">

      {/* Dove — top left */}
      <svg className="wdd wdd--dove-l" viewBox="0 0 90 70" fill="none">
        <path d="M10 40 C18 28 32 22 46 26 C54 28 60 24 66 18 C68 28 62 36 54 38 C62 38 70 34 74 28 C74 42 64 52 50 52 C38 52 28 58 22 66 C18 56 12 50 10 40Z" stroke="#c4735a" strokeWidth="1.5" fill="none" opacity="0.2"/>
        <circle cx="68" cy="16" r="3" fill="#c4735a" opacity="0.08"/>
        <path d="M6 38 C2 36 0 32 4 30" stroke="#c4735a" strokeWidth="1.5" strokeLinecap="round" opacity="0.08"/>
        <path d="M6 38 C4 42 6 46 10 44" stroke="#c4735a" strokeWidth="1.5" strokeLinecap="round" opacity="0.08"/>
      </svg>

      {/* Dove — top right (mirrored) */}
      <svg className="wdd wdd--dove-r" viewBox="0 0 90 70" fill="none" style={{ transform: 'scaleX(-1)' }}>
        <path d="M10 40 C18 28 32 22 46 26 C54 28 60 24 66 18 C68 28 62 36 54 38 C62 38 70 34 74 28 C74 42 64 52 50 52 C38 52 28 58 22 66 C18 56 12 50 10 40Z" stroke="#c4735a" strokeWidth="1.5" fill="none" opacity="0.2"/>
        <circle cx="68" cy="16" r="3" fill="#c4735a" opacity="0.08"/>
        <path d="M6 38 C2 36 0 32 4 30" stroke="#c4735a" strokeWidth="1.5" strokeLinecap="round" opacity="0.08"/>
        <path d="M6 38 C4 42 6 46 10 44" stroke="#c4735a" strokeWidth="1.5" strokeLinecap="round" opacity="0.08"/>
      </svg>

      {/* Rings — bottom left */}
      <svg className="wdd wdd--rings" viewBox="0 0 90 50" fill="none">
        <circle cx="28" cy="25" r="20" stroke="#c4735a" strokeWidth="2.5" opacity="0.2"/>
        <circle cx="28" cy="25" r="13" stroke="#e8a898" strokeWidth="1" opacity="0.06"/>
        <circle cx="58" cy="25" r="20" stroke="#c4735a" strokeWidth="2.5" opacity="0.2"/>
        <circle cx="58" cy="25" r="13" stroke="#e8a898" strokeWidth="1" opacity="0.06"/>
      </svg>

      {/* Petals */}
      <svg className="wdd wdd--petal-1" viewBox="0 0 30 52" fill="none">
        <ellipse cx="15" cy="26" rx="9" ry="22" fill="#e8a898" opacity="0.08" transform="rotate(20 15 26)"/>
      </svg>
      <svg className="wdd wdd--petal-2" viewBox="0 0 30 52" fill="none">
        <ellipse cx="15" cy="26" rx="8" ry="20" fill="#c4735a" opacity="0.06" transform="rotate(-15 15 26)"/>
      </svg>

      {/* Sparkles */}
      <svg className="wdd wdd--spark-1" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.4 10.6 L22 12 L13.4 13.4 L12 22 L10.6 13.4 L2 12 L10.6 10.6 Z" fill="#c4735a" opacity="0.2"/>
      </svg>
      <svg className="wdd wdd--spark-2" viewBox="0 0 24 24" fill="none">
        <path d="M12 4 L13 10.5 L19.5 12 L13 13.5 L12 20 L11 13.5 L4.5 12 L11 10.5 Z" fill="#e8a898" opacity="0.05"/>
      </svg>
      <svg className="wdd wdd--spark-3" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.4 10.6 L22 12 L13.4 13.4 L12 22 L10.6 13.4 L2 12 L10.6 10.6 Z" fill="#8c4a32" opacity="0.07"/>
      </svg>

    </div>
  )
}
