import './WeddingDate.css'
import { useReveal } from '../hooks/useReveal'
import WeddingDateDecor from './WeddingDateDecor'

const DAYS_OF_WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']

const WEEKS = [
  [null, null, null, null, null, 1,    2   ],
  [3,    4,    5,    6,    7,    8,    9   ],
  [10,   11,   12,   13,   14,   15,   16  ],
  [17,   18,   19,   20,   21,   22,   23  ],
  [24,   25,   26,   27,   28,   29,   30  ],
  [31,   null, null, null, null, null, null],
]

export default function WeddingDate() {
  const ref = useReveal()

  return (
    <section className="wedding-date">
      <WeddingDateDecor />

      <h2 className="section-title reveal" ref={ref}>Весілля відбудеться</h2>
      <div className="ornament">✦</div>

      <div className="wedding-date__calendar">
        <p className="wedding-date__month">Серпень 2026</p>

        <div className="wedding-date__grid">
          {DAYS_OF_WEEK.map((d) => (
            <div className="wedding-date__dow" key={d}>{d}</div>
          ))}

          {WEEKS.flat().map((day, i) => (
            <div
              key={i}
              className={`wedding-date__day${day === 15 ? ' wedding-date__day--highlight' : ''}${!day ? ' wedding-date__day--empty' : ''}`}
              style={{ animationDelay: `${i * 0.018}s` }}
            >
              {day === 15 ? (
                <>
                  <span className="wedding-date__heart">♥</span>
                  <span className="wedding-date__day-num">15</span>
                </>
              ) : (
                day || ''
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
