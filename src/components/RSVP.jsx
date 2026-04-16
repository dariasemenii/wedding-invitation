import { useState } from 'react'
import './RSVP.css'
import { useReveal } from '../hooks/useReveal'

const DRINKS = ['Вино', 'Шампанське', 'Горілка', 'Ром', 'Джин', 'Не вживаю']

export default function RSVP() {
  const titleRef = useReveal()
  const formRef = useReveal()

  const [form, setForm] = useState({ name: '', attending: '', drinks: [] })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim()) { setError('Будь ласка, вкажіть ваше ім\'я'); return }
    if (!form.attending)   { setError('Будь ласка, оберіть відповідь щодо участі'); return }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="rsvp">
        <div className="rsvp__thanks">
          <svg className="rsvp__thanks-heart" viewBox="0 0 32 30" fill="none" aria-hidden="true">
            <path d="M16 28C16 28 1 18.5 1 9.5a9 9 0 0 1 15-6.7A9 9 0 0 1 31 9.5C31 18.5 16 28 16 28z" fill="#c97a7a"/>
          </svg>
          <h2 className="section-title">Дякуємо, {form.name}!</h2>
          <p className="rsvp__thanks-text">Ваша відповідь отримана.<br />Ми вже чекаємо на зустріч із вами!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="rsvp">
      <h2 className="section-title reveal" ref={titleRef}>Важливі питання</h2>
      <div className="ornament">✦</div>
      <p className="rsvp__desc">
        Ми будемо вдячні, якщо дасте відповідь<br />
        на декілька питань, щоб ми створили ідеальне свято.
      </p>

      <form className="rsvp__form reveal" ref={formRef} onSubmit={handleSubmit} noValidate>

        {/* Name */}
        <div className="rsvp__field">
          <label className="rsvp__label">Ваше ім'я та прізвище</label>
          <input
            className="rsvp__input"
            type="text"
            placeholder="Введіть ім'я"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          />
        </div>

        {/* Attending */}
        <div className="rsvp__field">
          <label className="rsvp__label">Чи плануєте бути на весіллі?</label>
          <div className="rsvp__options">
            {['Так', 'Ні'].map(opt => (
              <label
                key={opt}
                className={`rsvp__option${form.attending === opt ? ' rsvp__option--active' : ''}`}
              >
                <input
                  type="radio"
                  name="attending"
                  value={opt}
                  checked={form.attending === opt}
                  onChange={() => setForm(f => ({ ...f, attending: opt }))}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Drink */}
        <div className="rsvp__field">
          <label className="rsvp__label">Якому напою Ви віддаєте перевагу?</label>
          <div className="rsvp__options rsvp__options--wrap">
            {DRINKS.map(opt => {
              const active = form.drinks.includes(opt)
              return (
                <label
                  key={opt}
                  className={`rsvp__option${active ? ' rsvp__option--active' : ''}`}
                >
                  <input
                    type="checkbox"
                    value={opt}
                    checked={active}
                    onChange={() => setForm(f => ({
                      ...f,
                      drinks: active
                        ? f.drinks.filter(d => d !== opt)
                        : [...f.drinks, opt],
                    }))}
                  />
                  {opt}
                </label>
              )
            })}
          </div>
        </div>

        {error && <p className="rsvp__error">{error}</p>}

        <button className="rsvp__submit" type="submit">
          Надіслати відповідь
        </button>

      </form>
    </section>
  )
}
