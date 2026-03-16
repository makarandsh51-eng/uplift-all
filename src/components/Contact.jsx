import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_8cumfkh'   // replace
const TEMPLATE_ID = 'template_39kr5xr'  // replace
const PUBLIC_KEY  = 'EdnX682Me0f78Howw'   // replace

export default function Contact({ dark, t }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 3000)
    } catch (err) {
      console.error(err)
      setError(true)
      setTimeout(() => setError(false), 3000)
    } finally {
      setLoading(false)
    }
  }

  const info = [
    { icon: '📍', label: t.contact.address },
    { icon: '✉️', label: t.contact.email },
    { icon: '📞', label: t.contact.phone },
  ]

  return (
    <section id="contact" className={`py-28 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 ${dark ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
            {t.contact.badge}
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Syne, sans-serif' }}>
            {t.contact.heading}
          </h2>
          <p className={`max-w-xl mx-auto text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.sub}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit}
            className={`rounded-2xl p-8 border ${dark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex flex-col gap-5">
              <input type="text" required placeholder={t.contact.namePlaceholder}
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none border transition-all focus:ring-2 focus:ring-emerald-500 ${dark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400'}`} />
              <input type="email" required placeholder={t.contact.emailPlaceholder}
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none border transition-all focus:ring-2 focus:ring-emerald-500 ${dark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400'}`} />
              <textarea rows={5} required placeholder={t.contact.msgPlaceholder}
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none border transition-all focus:ring-2 focus:ring-emerald-500 resize-none ${dark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400'}`} />

              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? '⏳ Sending...' : sent ? '✅ Sent!' : error ? '❌ Failed, try again' : t.contact.send}
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-8 pt-4">
            {info.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${dark ? 'bg-gray-800 border border-gray-700' : 'bg-emerald-50 border border-emerald-100'}`}>
                  {item.icon}
                </div>
                <span className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{item.label}</span>
              </div>
            ))}

            <div className="flex gap-4 mt-2">
              {[
                 { icon: 'ri-twitter-x-fill',  label: 'Follow us on X' },
                 { icon: 'ri-facebook-fill',   label: 'Follow us on Facebook' },
                 { icon: 'ri-instagram-line',  label: 'Follow us on Instagram' },
                 { icon: 'ri-youtube-fill',    label: 'Watch on YouTube' },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap
                    bg-gray-900 text-white shadow-lg
                    opacity-0 group-hover:opacity-100
                    translate-y-1 group-hover:translate-y-0
                    transition-all duration-200 pointer-events-none z-10">
                    {item.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs cursor-pointer transition-all hover:-translate-y-1 ${dark ? 'bg-gray-800 text-gray-300 hover:bg-emerald-700 hover:text-white border border-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-emerald-500 hover:text-white border border-gray-200'}`}>
                    <i className={item.icon} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-2 rounded-2xl p-6 border ${dark ? 'bg-gradient-to-br from-emerald-950/60 to-teal-950/60 border-emerald-800' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200'}`}>
              <p className={`text-sm font-semibold mb-1 ${dark ? 'text-emerald-300' : 'text-emerald-700'}`} style={{ fontFamily: 'Syne, sans-serif' }}>
                {t.contact.hMsg}
              </p>
              <p className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.contact.msg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}