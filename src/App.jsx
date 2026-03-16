import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Causes from './components/Services.jsx'
import Impact from './components/OurWork.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import translations from './translations.js'

export default function App() {
  const [dark, setDark] = useState(true)
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={`${dark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
        <Navbar dark={dark} setDark={setDark} lang={lang} setLang={setLang} t={t} />
        <Hero dark={dark} t={t} />
        <Causes dark={dark} t={t} />
        <Impact dark={dark} t={t} />
        <Contact dark={dark} t={t} />
        <Footer dark={dark} t={t} />
      </div>
    </div>
  )
}
