import './Wishes.css'
import { useReveal } from '../hooks/useReveal'

const items = [
  {
    icon: '🍾',
    text: 'Просимо вас не дарувати нам квіти,',
    accent: 'але пляшечці алкоголю для нашої домашньої колекції будемо дуже раді',
  },
  {
    icon: '💌',
    text: 'Грошові конверти будуть найкращим подарунком,',
    accent: 'який ми з радістю використаємо для здійснення наших мрій і бажань',
  },
]

export default function Wishes() {
  const titleRef = useReveal()

  return (
    <section className="wishes">
      <h2 className="section-title reveal" ref={titleRef}>Побажання</h2>
      <div className="ornament">✦</div>

      <div className="wishes__list">
        {items.map((item, i) => (
          <WishItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

function WishItem({ item, index }) {
  const ref = useReveal()
  return (
    <div
      className="wishes__item reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.18}s` }}
    >
      <span className="wishes__icon">{item.icon}</span>
      <p className="wishes__text">{item.text}</p>
      <p className="wishes__accent">{item.accent}</p>
    </div>
  )
}
