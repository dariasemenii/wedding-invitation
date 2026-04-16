import './EventDetails.css'

export default function EventDetails() {
  return (
    <section className="event-details">
      <h2 className="section-title">Event Details</h2>
      <div className="ornament">✦</div>

      <div className="event-details__cards">
        <div className="event-card">
          <span className="event-card__icon">⛪</span>
          <p className="event-card__type">Ceremony</p>
          <h3 className="event-card__venue">St. Mary's Church</h3>
          <p className="event-card__time">2:00 PM</p>
          <p className="event-card__address">
            123 Church Lane<br />
            Milan, Italy
          </p>
        </div>

        <div className="event-card">
          <span className="event-card__icon">🌹</span>
          <p className="event-card__type">Reception</p>
          <h3 className="event-card__venue">Villa Rosa</h3>
          <p className="event-card__time">5:00 PM</p>
          <p className="event-card__address">
            456 Garden Road<br />
            Milan, Italy
          </p>
        </div>
      </div>
    </section>
  )
}
