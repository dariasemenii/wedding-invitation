import './Wishes.css'

export default function Wishes() {
  return (
    <section className="wishes">
      <h2 className="section-title">Побажання</h2>
      <div className="ornament">✦</div>

      <div className="wishes__card">
        <p className="wishes__text">
          Просимо вас не дарувати нам квіти,
        </p>
        <p className="wishes__text wishes__text--accent">
          але пляшечці алкоголю<br />
          для нашої домашньої колекції<br />
          будемо дуже раді 🍾
        </p>
      </div>

      <div className="wishes__card">
        <p className="wishes__text wishes__text--accent">
          Грошові конверти будуть найкращим подарунком, 💌
        </p>
        <p className="wishes__text">
          який ми з радістю використаємо<br />
          для здійснення наших мрій і бажань
        </p>
      </div>
    </section>
  )
}
