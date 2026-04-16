import './Footer.css'
import { useReveal } from '../hooks/useReveal'

export default function Footer() {
  const ref = useReveal()

  return (
    <footer className="footer">
      <div className="footer__divider">✦</div>
      <div className="footer__content reveal" ref={ref}>
        <p className="footer__message">З нетерпінням чекаємо на вас!</p>
        <p className="footer__names">З любов'ю — Вадим та Дар'я</p>
        <p className="footer__date">15 · 08 · 2026</p>
      </div>
    </footer>
  )
}
