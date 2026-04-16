import './TimelineDecor.css'

export default function TimelineDecor() {
  return (
    <div className="timeline-decor" aria-hidden="true">

      {/* Rose — top left */}
      <svg className="tl-decor tl-decor--rose-tl" viewBox="0 0 80 80" fill="none">
        <path d="M40 10 C40 10 55 22 55 35 C55 47 47 55 40 55 C33 55 25 47 25 35 C25 22 40 10 40 10Z" fill="#c9a98a" opacity="0.18"/>
        <path d="M40 55 C40 55 32 50 28 44 C32 46 36 47 40 47 C44 47 48 46 52 44 C48 50 40 55 40 55Z" fill="#e8c4c4" opacity="0.2"/>
        <path d="M40 55 L40 72" stroke="#c9b8a8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        <path d="M40 65 C37 62 33 62 31 64" stroke="#c9b8a8" strokeWidth="1.2" strokeLinecap="round" opacity="0.25"/>
        {/* petals */}
        <ellipse cx="40" cy="28" rx="7" ry="11" fill="#e8c4c4" opacity="0.22" transform="rotate(0 40 35)"/>
        <ellipse cx="40" cy="28" rx="7" ry="11" fill="#d4a9a9" opacity="0.18" transform="rotate(60 40 35)"/>
        <ellipse cx="40" cy="28" rx="7" ry="11" fill="#c9a98a" opacity="0.15" transform="rotate(120 40 35)"/>
        <ellipse cx="40" cy="28" rx="7" ry="11" fill="#e8c4c4" opacity="0.18" transform="rotate(180 40 35)"/>
        <ellipse cx="40" cy="28" rx="7" ry="11" fill="#d4a9a9" opacity="0.15" transform="rotate(240 40 35)"/>
        <ellipse cx="40" cy="28" rx="7" ry="11" fill="#c9a98a" opacity="0.18" transform="rotate(300 40 35)"/>
      </svg>

      {/* Rings — top right */}
      <svg className="tl-decor tl-decor--rings-tr" viewBox="0 0 90 50" fill="none">
        <circle cx="28" cy="25" r="20" stroke="#c9a98a" strokeWidth="3" opacity="0.22"/>
        <circle cx="28" cy="25" r="14" stroke="#e8c4c4" strokeWidth="1.5" opacity="0.15"/>
        <circle cx="58" cy="25" r="20" stroke="#c9a98a" strokeWidth="3" opacity="0.22"/>
        <circle cx="58" cy="25" r="14" stroke="#e8c4c4" strokeWidth="1.5" opacity="0.15"/>
      </svg>

      {/* Heart — mid left */}
      <svg className="tl-decor tl-decor--heart-ml" viewBox="0 0 60 55" fill="none">
        <path d="M30 48C30 48 5 34 5 18a13 13 0 0 1 25-5 13 13 0 0 1 25 5c0 16-25 30-25 30z" fill="#c97a7a" opacity="0.12"/>
        <path d="M30 48C30 48 5 34 5 18a13 13 0 0 1 25-5 13 13 0 0 1 25 5c0 16-25 30-25 30z" stroke="#c97a7a" strokeWidth="1" opacity="0.2"/>
      </svg>

      {/* Champagne — bottom right */}
      <svg className="tl-decor tl-decor--flute-br" viewBox="0 0 40 90" fill="none">
        <path d="M8 5 L32 5 L26 42 L22 42 L22 75 L28 75 L28 80 L12 80 L12 75 L18 75 L18 42 L14 42 Z" stroke="#c9a98a" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.2"/>
        <path d="M10 5 L30 5 L27 22 L13 22 Z" fill="#e8c4c4" opacity="0.12"/>
        {/* bubbles */}
        <circle cx="17" cy="30" r="1.5" fill="#c9a98a" opacity="0.2"/>
        <circle cx="22" cy="22" r="1"   fill="#c9a98a" opacity="0.18"/>
        <circle cx="19" cy="15" r="1.2" fill="#c9a98a" opacity="0.15"/>
        <circle cx="24" cy="35" r="1"   fill="#e8c4c4" opacity="0.18"/>
      </svg>

      {/* Small scattered petals */}
      <svg className="tl-decor tl-decor--petal-1" viewBox="0 0 30 50" fill="none">
        <ellipse cx="15" cy="25" rx="9" ry="22" fill="#e8c4c4" opacity="0.18" transform="rotate(20 15 25)"/>
      </svg>
      <svg className="tl-decor tl-decor--petal-2" viewBox="0 0 30 50" fill="none">
        <ellipse cx="15" cy="25" rx="8" ry="20" fill="#c9a98a" opacity="0.15" transform="rotate(-15 15 25)"/>
      </svg>
      <svg className="tl-decor tl-decor--petal-3" viewBox="0 0 30 50" fill="none">
        <ellipse cx="15" cy="25" rx="7" ry="18" fill="#d4a9a9" opacity="0.14" transform="rotate(35 15 25)"/>
      </svg>

      {/* Stars / sparkles */}
      <svg className="tl-decor tl-decor--spark-1" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="#c9a98a" opacity="0.2"/>
      </svg>
      <svg className="tl-decor tl-decor--spark-2" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="#e8c4c4" opacity="0.18"/>
      </svg>
      <svg className="tl-decor tl-decor--spark-3" viewBox="0 0 24 24" fill="none">
        <path d="M12 4 L13 10 L19 12 L13 14 L12 20 L11 14 L5 12 L11 10 Z" fill="#c9a98a" opacity="0.15"/>
      </svg>

    </div>
  )
}
