import './EventDetails.css'
import { useReveal } from '../hooks/useReveal'

export default function EventDetails() {
  const ref = useReveal()

  return (
    <section className="event-details">
      <h2 className="section-title">Локація</h2>
      <div className="ornament">✦</div>

      <div className="event-details__body reveal" ref={ref}>
        <h3 className="event-details__venue">Ресторан «Маєток»</h3>
        <p className="event-details__address">село Городилець</p>
        <div className="event-details__rule" />
        <a
          className="event-details__map-btn"
          href="https://maps.google.com/?q=Городилець,+Україна"
          target="_blank"
          rel="noopener noreferrer"
        >
          Відкрити на Google Maps
        </a>
      </div>
    </section>
  )
}
