import './MapSection.css'

// Replace the src URL with the actual venue's Google Maps embed URL.
// To get it: open Google Maps → find your venue → Share → Embed a map → copy the iframe src.
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5!2d9.1859!3d45.4654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e3!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2sus!4v1700000000000'

export default function MapSection() {
  return (
    <section className="map-section">
      <h2 className="section-title">How to Get There</h2>
      <div className="ornament">✦</div>

      <div className="map-section__frame-wrapper">
        <iframe
          src={MAP_EMBED_SRC}
          title="Wedding venue location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="map-section__footer">
        Villa Rosa · 456 Garden Road, Milan ·{' '}
        <a
          href="https://maps.google.com/?q=Milan,Italy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </p>

      <p className="map-section__closing">
        We look forward to celebrating<br />
        this special day with you
      </p>
    </section>
  )
}
