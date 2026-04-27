import './Wishes.css'
import { useReveal } from '../hooks/useReveal'
import WishesDecor from './WishesDecor'

const items = [
  {
    icon: '🍾',
    text: 'Якщо задумали про квіти, краще замініть їх на щось "довготривале",',
    accent: 'наприклад, пляшечку алкоголю для нашої колекції, яку з радістю відкриємо разом з вами при нагоді.',
  },
  {
    icon: '💌',
    text: 'Ми вважаємо вашу присутність на нашому святі найкращим подарунком!',
    accent: 'але якщо ви бажаєте допомогти втілити наші мрії, ми будемо вдячні за подарунок у конверті.',
  },
]

export default function Wishes() {
  const titleRef = useReveal()

  return (
    <section className="wishes">
      <WishesDecor />
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
      <p className="wishes__text">{item.accent}</p>
    </div>
  )
}
