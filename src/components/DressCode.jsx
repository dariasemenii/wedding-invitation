import './DressCode.css'
import { useReveal } from '../hooks/useReveal'

const palette = ['#f2e1d1', '#d2eafc', '#ffd7e3', '#ced645', '#96a383', '#9c8e82', '#755a49']

export default function DressCode() {
  const ref = useReveal()

  return (
    <section className="dresscode">
      <h2 className="section-title reveal" ref={ref}>Дрес-код</h2>
      <div className="ornament">✦</div>

      <p className="dresscode__text">
        Нам буде приємно, якщо ви підтримаєте<br />
        атмосферу нашого свята.
      </p>

      <p className="dresscode__keywords">
        Пастельні тони · Ніжний стиль · Елегантна простота
      </p>

      <div className="dresscode__palette">
        {palette.map((color, i) => (
          <div
            key={color}
            className="dresscode__swatch"
            style={{ backgroundColor: color, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>

      <p className="dresscode__note">
        Білий залишаємо для нареченої 🤍
      </p>
    </section>
  )
}
