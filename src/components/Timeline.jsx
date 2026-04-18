import './Timeline.css'
import { useReveal } from '../hooks/useReveal'
import TimelineDecor from './TimelineDecor'

const events = [
  { time: '13:00', title: 'Збір гостей',       description: 'Ресторан «Маєток»' },
  { time: '14:00', title: 'Церемонія',          description: 'Вона нарешті скаже йому так!' },
  { time: '15:00', title: 'Банкет',             description: 'Смачні страви, святкова програма та купа танців' },
  { time: '22:00', title: 'Завершення вечора',  description: 'Дякуємо, що розділили з нами цей особливий день' },
]

export default function Timeline() {
  const titleRef = useReveal()

  return (
    <section className="timeline-section">
      <TimelineDecor />

      <h2 className="section-title reveal" ref={titleRef}>Програма дня</h2>
      <div className="ornament">✦</div>

      <div className="timeline">
        {events.map((event, i) => (
          <TimelineItem key={i} event={event} index={i} last={i === events.length - 1} />
        ))}
      </div>
    </section>
  )
}

function TimelineItem({ event, index, last }) {
  const ref = useReveal(0.2)
  return (
    <div
      className="timeline__item reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="timeline__time">{event.time}</div>
      <div className="timeline__marker">
        <div className="timeline__dot" />
        {!last && <div className="timeline__line" />}
      </div>
      <div className="timeline__body">
        <h3 className="timeline__title">{event.title}</h3>
        <p className="timeline__desc">{event.description}</p>
      </div>
    </div>
  )
}
