import { useEffect, useRef } from 'react'

const COLORS = ['#c9a98a', '#e8c4c4', '#d4a9a9', '#e2d4c8', '#c9b8a8']

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

function createParticle(width, height) {
  return {
    x:       randomBetween(0, width),
    y:       randomBetween(0, height),
    r:       randomBetween(1.2, 3.2),
    color:   COLORS[Math.floor(Math.random() * COLORS.length)],
    speedX:  randomBetween(-0.3, 0.3),
    speedY:  randomBetween(-0.6, -0.15),
    opacity: randomBetween(0.3, 0.9),
    drift:   randomBetween(0.003, 0.008),
    offset:  randomBetween(0, Math.PI * 2),
  }
}

export default function ParticleCanvas({ count = 55 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let tick = 0

    function resize() {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles = Array.from({ length: count }, () =>
        createParticle(canvas.width, canvas.height)
      )
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick += 0.01

      particles.forEach((p) => {
        // gentle horizontal sway
        const sway = Math.sin(tick + p.offset) * 30

        ctx.beginPath()
        ctx.arc(p.x + sway * p.drift * 60, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()

        p.y += p.speedY
        p.x += p.speedX

        // wrap around when off-screen
        if (p.y + p.r < 0) {
          p.y = canvas.height + p.r
          p.x = randomBetween(0, canvas.width)
        }
        if (p.x < -p.r)            p.x = canvas.width  + p.r
        if (p.x > canvas.width + p.r) p.x = -p.r
      })

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return <canvas ref={canvasRef} className="particle-canvas" />
}
