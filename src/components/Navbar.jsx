import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar({ dark, setDark, lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: t.nav.home,     href: '#home' },
    { label: t.nav.services, href: '#causes' },
    { label: t.nav.ourwork,  href: '#impact' },
    { label: t.nav.contact,  href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${dark ? 'bg-gray-950/90 border-gray-800' : 'bg-white/90 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
           src={logo}
           alt="Uplift-All Logo"
           style={{ height: 52, width: 'auto', objectFit: 'contain', transition: 'transform 0.2s' }}
           onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
           onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily:'Syne,sans-serif', color: dark ? 'white' : '#111827' }}>
            Uplift<span style={{ color:'#10b981' }}>-All</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors duration-200 relative group ${dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a href="#home"
            className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5">
            {t.nav.donate}
          </a>
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            title="Toggle Theme"
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${dark ? 'bg-emerald-600 focus:ring-offset-gray-950' : 'bg-gray-200 focus:ring-offset-white'}`}>
            <span className={`absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-300 shadow-md ${dark ? 'translate-x-6 bg-white text-emerald-600' : 'translate-x-0.5 bg-white text-gray-500'}`}>
              {dark ? '🌙' : '☀️'}
            </span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${dark ? 'border-gray-600 text-gray-200 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
            style={{ fontFamily: 'Syne, sans-serif' }}>
            {lang === 'en' ? 'हि' : 'EN'}
          </button>

          {/* Hamburger */}
          <button
            className={`md:hidden p-1.5 rounded-md transition-colors ${dark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-5 flex flex-col gap-1">
              <span className={`h-0.5 rounded transition-all ${dark ? 'bg-gray-300' : 'bg-gray-600'} ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 rounded transition-all ${dark ? 'bg-gray-300' : 'bg-gray-600'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 rounded transition-all ${dark ? 'bg-gray-300' : 'bg-gray-600'} ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-4 flex flex-col gap-3 border-t ${dark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-100'}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className={`py-2 text-sm font-medium ${dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              {l.label}
            </a>
          ))}
          <a href="#hero-donate" onClick={() => setMenuOpen(false)}
            className="py-2.5 px-5 rounded-full bg-emerald-500 text-white text-sm font-semibold text-center">
            {t.nav.donate}
          </a>
        </div>
      )}
    </nav>
  )
}
