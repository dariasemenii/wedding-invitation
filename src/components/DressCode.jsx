import './DressCode.css'
import { useReveal } from '../hooks/useReveal'

const ladies = [ '#62745c', '#725d48', '#6d3a23', '#cfb88c' ,'#f2d0c0', '#ffd7e3', '#f6ebd0']
const gents  = [ '#b29a7e', '#725d48', '#ffffff', '#1a1a1a']

export default function DressCode() {
  const ref = useReveal()

  return (
    <section className="dresscode">
      <h2 className="section-title reveal" ref={ref}>Дрес-код</h2>
      <div className="ornament">✦</div>

      <p className="dresscode__text">
        Нам буде приємно, якщо ви підтримаєте<br />
        кольорову гаму нашого свята.
      </p>

      <p className="dresscode__keywords">
        Пастельні тони · Ніжний стиль · Елегантна простота
      </p>

      <div className="dresscode__columns">

        <div className="dresscode__group">
          <p className="dresscode__group-label">Леді</p>
            <p className="dresscode__note">Білий залишаємо для нареченої 🤍</p>
            <div className="dresscode__palette">
            {ladies.map((color, i) => (
              <div
                key={color}
                className="dresscode__swatch"
                style={{ backgroundColor: color, animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </div>
        </div>

        <div className="dresscode__group">
          <p className="dresscode__group-label">Джентельмени</p>
          <div className="dresscode__palette">
            {gents.map((color, i) => (
              <div
                key={color}
                className="dresscode__swatch"
                style={{ backgroundColor: color, animationDelay: `${(i + ladies.length) * 0.08}s` }}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
