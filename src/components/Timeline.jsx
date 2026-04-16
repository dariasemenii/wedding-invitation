import './Timeline.css'

const events = [
  {
    time: '13:00',
    title: 'Збір гостей',
    description: 'Ресторан «Маєток»',
  },
  {
    time: '14:00',
    title: 'Церемонія',
    description: 'Вона нарешті скаже йому так!',
  },
  {
    time: '15:00',
    title: 'Банкет',
    description: 'Смачні страви, святкова програма та купа танців',
  },
  {
    time: '23:00',
    title: 'Завершення вечора',
    description: 'Дякуємо, що розділили з нами цей особливий день',
  },
]

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="section-title">Програма дня</h2>
      <div className="ornament">✦</div>

      <div className="timeline">
        {events.map((event, i) => (
          <div className="timeline__item" key={i}>
            <div className="timeline__time">{event.time}</div>
            <div className="timeline__marker">
              <div className="timeline__dot" />
              {i < events.length - 1 && <div className="timeline__line" />}
            </div>
            <div className="timeline__body">
              <h3 className="timeline__title">{event.title}</h3>
              <p className="timeline__desc">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
