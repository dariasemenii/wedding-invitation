import { useState } from 'react'
import './SplashScreen.css'

function SplashScreen({ onDismiss }) {
  const [exiting, setExiting] = useState(false)

  function handleClick() {
    if (exiting) return
    setExiting(true)
    setTimeout(onDismiss, 700)
  }

  return (
    <div
      className={`splash${exiting ? ' splash--exiting' : ''}`}
      onClick={handleClick}
    >
      <div className="splash__content">
        <svg className="splash__heart" aria-hidden="true" viewBox="0 0 32 30" fill="none">
          <path d="M16 28C16 28 1 18.5 1 9.5a9 9 0 0 1 15-6.7A9 9 0 0 1 31 9.5C31 18.5 16 28 16 28z" fill="#c97a7a"/>
        </svg>
        <p className="splash__prompt">Натисніть щоб відкрити</p>
      </div>
    </div>
  )
}

export default SplashScreen
