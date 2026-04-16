import { useState, useEffect, useRef } from 'react'
import './Countdown.css'
import { useReveal } from '../hooks/useReveal'

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

function CountdownUnit({ value, label, delay }) {
  const [flipping, setFlipping] = useState(false)
  const prevValue = useRef(value)
  const ref = useReveal()

  useEffect(() => {
    if (prevValue.current !== value) {
      setFlipping(true)
      const t = setTimeout(() => setFlipping(false), 350)
      prevValue.current = value
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <div className="countdown__unit reveal" ref={ref} style={{ transitionDelay: delay }}>
      <span className={`countdown__value${flipping ? ' countdown__value--flip' : ''}`}>
        {String(value).padStart(2, '0')}
      </span>
      <span className="countdown__label">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const titleRef = useReveal()

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
      <h2 className="section-title reveal" ref={titleRef}>До весілля залишилось</h2>
      <div className="ornament">✦</div>

      <div className="countdown__grid">
        {units.map(({ value, label }, i) => (
          <CountdownUnit key={label} value={value} label={label} delay={`${i * 0.1}s`} />
        ))}
      </div>
    </section>
  )
}
