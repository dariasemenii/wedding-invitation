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
        <p className="splash__date">14 · June · 2026</p>
        <div className="splash__heart" aria-hidden="true">♥</div>
        <p className="splash__prompt">Натисніть щоб відкрити</p>
      </div>
    </div>
  )
}

export default SplashScreen
