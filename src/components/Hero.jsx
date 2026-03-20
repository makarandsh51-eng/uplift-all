import { useState } from 'react'
import qrImage from '../assets/qr-code.png' 

export default function Hero({ dark, t }) {
  const [selectedAmt, setSelectedAmt] = useState('₹100')
  const [customAmt, setCustomAmt] = useState('')
  const [donated, setDonated] = useState(false)

  const stats = [
    { value: '1.2L+', label: t.hero.stat1 },
    { value: '840+',  label: t.hero.stat2 },
    { value: '5,000+', label: t.hero.stat3 },
  ]

  function handleDonate() {
  setDonated(true)
  setCustomAmt('')
  setSelectedAmt('')
  setTimeout(() => setDonated(false), 3000)
  }



  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden pt-16 ${dark ? 'bg-gray-950' : 'bg-slate-50'}`}>

      {/* Background blobs */}
      <div className="hero-glow w-96 h-96 bg-emerald-600 top-10 -left-20" />
      <div className="hero-glow w-72 h-72 bg-teal-500 bottom-10 right-0" />
      <div className="hero-glow w-56 h-56 bg-lime-400 top-1/2 right-1/4" />

      {/* Grid pattern */}
      <div className={`absolute inset-0 ${dark ? 'opacity-5' : 'opacity-10'}`}
        style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* Left — copy */}
        <div className="animate-fade-up">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border ${dark ? 'bg-emerald-950/60 border-emerald-700 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            {t.hero.badge}
          </div>

          <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Syne, sans-serif', lineHeight:1.2 }}>
            {t.hero.heading1} <br />
            <span className="text-emerald-500">
              {t.hero.heading2} 
            </span>
            <br />{t.hero.heading3}
          </h1>

          <p className={`text-base leading-relaxed mb-8 max-w-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#hero-donate"
              className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5">
              {t.hero.cta1} 💚
            </a>
            <a href="#impact"
              className={`px-8 py-3.5 rounded-full font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${dark ? 'border-gray-600 text-gray-200 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-white hover:shadow-md'}`}>
              {t.hero.cta2}
            </a>
          </div>

          <div className="flex flex-wrap gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className={`text-3xl font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: 'Syne, sans-serif' }}>{s.value}</div>
                <div className={`text-xs mt-0.5 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Donate card */}
        <div id="hero-donate" className="w-full max-w-md mx-auto">
          <div className={`rounded-3xl p-7 border shadow-2xl ${dark ? 'bg-gray-900 border-gray-700 shadow-emerald-900/20' : 'bg-white border-gray-200 shadow-emerald-100'}`}>

            <h3 className={`text-xl font-bold mb-5 text-center ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Syne, sans-serif' }}>
              💚 {t.hero.donateHeading}
            </h3>

            {/* QR Code */}
            <div className="flex flex-col items-center mb-5">
              <p className={`text-xs font-semibold mb-3 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {t.hero.scanText}
              </p>
              <div className={`w-36 h-36 rounded-xl overflow-hidden border-4 ${dark ? 'border-emerald-700' : 'border-emerald-400'} shadow-md`}>
                 <img
                  src={qrImage}
                  alt="Donate QR Code"
                  className="w-full h-full object-cover"
                 />
              </div>
              <p className={`mt-2 text-xs font-mono ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                {t.hero.upiId}
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex-1 h-px ${dark ? 'bg-gray-700' : 'bg-gray-200'}`} />
              <span className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{t.hero.orText}</span>
              <div className={`flex-1 h-px ${dark ? 'bg-gray-700' : 'bg-gray-200'}`} />
            </div>

            {/* Amount pills */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {t.hero.amounts.map((a) => (
                <button key={a}
                  onClick={() => { setSelectedAmt(a); setCustomAmt('') }}
                  className={`py-2 rounded-xl text-sm font-semibold transition-all border ${selectedAmt === a && !customAmt
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20'
                    : dark ? 'bg-gray-800 text-gray-300 border-gray-700 hover:border-emerald-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-emerald-400'}`}>
                  {a}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <input
              type="number"
              min="1"
              style={{ width:'100%', padding:'10px 16px', borderRadius:12, fontSize:14, border:'1px solid', outline:'none', marginBottom:16, backgroundColor: dark ? '#1f2937' : '#f9fafb', borderColor: dark ? '#374151' : '#d1d5db', color: dark ? 'white' : '#111827' }}
              placeholder={t.hero.customPlaceholder}
              value={customAmt}
              onChange={e => {
                const val = e.target.value
                if (val === '' || parseInt(val) >= 1) {
                  setCustomAmt(val)
                  setSelectedAmt('')
                }
              
            }}/>

            <button onClick={handleDonate}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30">
              {donated ? '🎉 Thank You!' : t.hero.donateBtn + ' →'}
            </button>

            <p className={`text-center text-xs mt-3 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
              🔒 Secure · 80G Tax Exempt · Transparent
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
