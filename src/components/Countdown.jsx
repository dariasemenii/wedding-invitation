import { useState, useEffect } from 'react'
import './Countdown.css'

const WEDDING_DATE = new Date('2026-08-15T13:00:00')

function getTimeLeft() {
  const diff = WEDDING_DATE - Date.now()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!timeLeft) return null

  const units = [
    { value: timeLeft.days,    label: 'днів' },
    { value: timeLeft.hours,   label: 'годин' },
    { value: timeLeft.minutes, label: 'хвилин' },
    { value: timeLeft.seconds, label: 'секунд' },
  ]

  return (
    <section className="countdown">
      <h2 className="section-title">До весілля залишилось</h2>
      <div className="ornament">✦</div>

      <div className="countdown__grid">
        {units.map(({ value, label }) => (
          <div className="countdown__unit" key={label}>
            <span className="countdown__value">{String(value).padStart(2, '0')}</span>
            <span className="countdown__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
