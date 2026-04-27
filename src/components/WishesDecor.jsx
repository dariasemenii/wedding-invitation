import './WishesDecor.css'

export default function WishesDecor() {
  return (
    <div className="wishes-decor" aria-hidden="true">

      {/* Wine bottle — top left */}
      <svg className="wd-decor wd-decor--bottle-tl" viewBox="0 0 50 110" fill="none">
        <path d="M20 5 L30 5 L30 20 C38 26 42 36 42 50 L42 90 C42 96 37 100 25 100 C13 100 8 96 8 90 L8 50 C8 36 12 26 20 20 Z" stroke="#c4735a" strokeWidth="1.8" fill="none" opacity="0.05"/>
        <path d="M20 5 L30 5" stroke="#c4735a" strokeWidth="2" strokeLinecap="round" opacity="0.10"/>
        <path d="M22 2 L28 2 L28 6 L22 6 Z" fill="#c4735a" opacity="0.08"/>
        <ellipse cx="25" cy="62" rx="12" ry="6" stroke="#c4735a" strokeWidth="1" opacity="0.07"/>
        <path d="M13 50 C13 44 37 44 37 50" stroke="#c4735a" strokeWidth="1" opacity="0.07"/>
        {/* label */}
        <rect x="14" y="60" width="22" height="18" rx="2" stroke="#c4735a" strokeWidth="1" opacity="0.07"/>
        <path d="M18 68 L32 68" stroke="#c4735a" strokeWidth="0.8" opacity="0.05"/>
        <path d="M20 72 L30 72" stroke="#c4735a" strokeWidth="0.8" opacity="0.05"/>
      </svg>

      {/* Envelope — top right */}
      <svg className="wd-decor wd-decor--envelope-tr" viewBox="0 0 90 65" fill="none">
        <rect x="4" y="8" width="82" height="54" rx="4" stroke="#c4735a" strokeWidth="1.8" opacity="0.05"/>
        <path d="M4 12 L45 38 L86 12" stroke="#c4735a" strokeWidth="1.5" opacity="0.2"/>
        <path d="M4 62 L32 36" stroke="#c4735a" strokeWidth="1.2" opacity="0.07"/>
        <path d="M86 62 L58 36" stroke="#c4735a" strokeWidth="1.2" opacity="0.07"/>
        {/* small heart on envelope */}
        <path d="M45 22 C45 22 38 17 38 13a5 5 0 0 1 7-1 5 5 0 0 1 7 1c0 4-7 9-7 9z" fill="#c4735a" opacity="0.2"/>
      </svg>

      {/* Sparkles — scattered */}
      <svg className="wd-decor wd-decor--spark-1" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.4 10.6 L22 12 L13.4 13.4 L12 22 L10.6 13.4 L2 12 L10.6 10.6 Z" fill="#c4735a" opacity="0.2"/>
      </svg>
      <svg className="wd-decor wd-decor--spark-2" viewBox="0 0 24 24" fill="none">
        <path d="M12 4 L13 10.5 L19.5 12 L13 13.5 L12 20 L11 13.5 L4.5 12 L11 10.5 Z" fill="#c4735a" opacity="0.05"/>
      </svg>
      <svg className="wd-decor wd-decor--spark-3" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.4 10.6 L22 12 L13.4 13.4 L12 22 L10.6 13.4 L2 12 L10.6 10.6 Z" fill="#c4735a" opacity="0.08"/>
      </svg>

      {/* Rose petals */}
      <svg className="wd-decor wd-decor--petal-1" viewBox="0 0 30 52" fill="none">
        <ellipse cx="15" cy="26" rx="9" ry="22" fill="#c4735a" opacity="0.08" transform="rotate(25 15 26)"/>
      </svg>
      <svg className="wd-decor wd-decor--petal-2" viewBox="0 0 30 52" fill="none">
        <ellipse cx="15" cy="26" rx="8" ry="20" fill="#c4735a" opacity="0.06" transform="rotate(-20 15 26)"/>
      </svg>
      <svg className="wd-decor wd-decor--petal-3" viewBox="0 0 30 52" fill="none">
        <ellipse cx="15" cy="26" rx="7" ry="18" fill="#c4735a" opacity="0.07" transform="rotate(10 15 26)"/>
      </svg>

      {/* Coins / gold circles — bottom */}
      <svg className="wd-decor wd-decor--coins" viewBox="0 0 80 50" fill="none">
        <circle cx="18" cy="25" r="16" stroke="#c4735a" strokeWidth="1.5" opacity="0.08"/>
        <circle cx="18" cy="25" r="10" stroke="#c4735a" strokeWidth="1" opacity="0.05"/>
        <circle cx="42" cy="25" r="16" stroke="#c4735a" strokeWidth="1.5" opacity="0.08"/>
        <circle cx="42" cy="25" r="10" stroke="#c4735a" strokeWidth="1" opacity="0.05"/>
        <circle cx="66" cy="25" r="12" stroke="#c4735a" strokeWidth="1.5" opacity="0.07"/>
        <circle cx="66" cy="25" r="7"  stroke="#c4735a" strokeWidth="1" opacity="0.1"/>
      </svg>

    </div>
  )
}
