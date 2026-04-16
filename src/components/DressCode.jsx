import './DressCode.css'

const palette = ['#f5e6e6', '#e8d5c4', '#d4c5b0', '#c9b8a8', '#e6ded5', '#dde8e0']

export default function DressCode() {
  return (
    <section className="dresscode">
      <h2 className="section-title">Дрес-код</h2>
      <div className="ornament">✦</div>

      <p className="dresscode__text">
        Нам буде приємно, якщо ви підтримаєте<br />
        атмосферу нашого свята.
      </p>

      <p className="dresscode__keywords">
        Пастельні тони · Ніжний стиль · Елегантна простота
      </p>

      <div className="dresscode__palette">
        {palette.map((color) => (
          <div
            key={color}
            className="dresscode__swatch"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <p className="dresscode__note">
        Білий залишаємо для нареченої 🤍
      </p>
    </section>
  )
}
