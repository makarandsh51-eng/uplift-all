import { useState, useEffect, useRef } from 'react'

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const numeric = parseFloat(target.replace(/[^0-9.]/g, ''))
        const duration = 2000
        const steps = 60
        const increment = numeric / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= numeric) {
            current = numeric
            clearInterval(timer)
          }
          setCount(current)
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  function formatCount(n, originalStr) {
    if (originalStr.includes('M')) return (n / 1000000).toFixed(1) + 'M+'
    if (originalStr.includes('L')) return (n / 100000).toFixed(0) + 'L+'
    if (originalStr.includes(',') && n >= 1000) {
      return Math.round(n).toLocaleString('en-IN') + '+'
    }
    return Math.round(n) + '+'
  }

  return <span ref={ref}>{formatCount(count, target)}</span>
}

export default function OurWork({ dark, t }) {
  return (
    <section id="impact" className={`py-28 ${dark ? 'bg-gray-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 ${dark ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
            {t.impact.badge}
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Syne, sans-serif' }}>
            {t.impact.heading}
          </h2>
          <p className={`max-w-xl mx-auto text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.impact.sub}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {t.impact.stats.map((stat, i) => (
            <div key={i}
              className={`card-hover rounded-2xl p-6 border text-center group ${dark ? 'bg-gray-800/60 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:shadow-xl'}`}>
              <div className="text-4xl mb-3 transition-transform group-hover:scale-110 duration-300">
                {stat.icon}
              </div>
              <div className={`text-2xl md:text-3xl font-extrabold mb-1 ${stat.color}`}
                style={{ fontFamily: 'Syne, sans-serif' }}>
                <CountUp target={stat.value} />
              </div>
              <p className={`text-xs leading-tight ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className={`mt-16 rounded-2xl p-8 border text-center ${dark ? 'bg-gray-800/40 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-lg font-medium italic mb-4 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.impact.msg}
          </p>
          <p className={`text-sm font-semibold ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
            {t.impact.person}
          </p>
        </div>
      </div>
    </section>
  )
}
