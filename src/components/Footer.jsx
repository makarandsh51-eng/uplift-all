import logo from "../assets/logo.png";

export default function Footer({ dark, t }) {
  const links = [
    { label: t.nav.home,     href: '#home' },
    { label: t.nav.services, href: '#causes' },
    { label: t.nav.ourwork,  href: '#impact' },
    { label: t.nav.contact,  href: '#contact' },
  ]

  return (
    <footer className={`border-t ${dark ? 'bg-gray-950 border-gray-800' : 'bg-slate-50 border-gray-200'}`}>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 items-start">
        
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <a href="#home" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
            <img src={logo} alt="Uplift-All" style={{ height:36, width:'auto', objectFit:'contain' }} />
              <span className={`font-bold text-lg ${dark ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Syne, sans-serif' }}>
                Uplift<span className="text-emerald-500">-All</span>
              </span>
            </a>
          </div>
          <p className={`text-xs leading-relaxed max-w-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            {t.footer.tagline}
          </p>
          <p className={`text-xs ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            {t.footer.reg}
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-3">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            Quick Links
          </p>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`text-xs transition-colors duration-200 w-fit ${dark ? 'text-gray-500 hover:text-emerald-400' : 'text-gray-400 hover:text-emerald-600'}`}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Legal / Trust */}
        <div className="flex flex-col gap-3">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            Trust & Legal
          </p>
          {['80G Tax Exemption', 'Quarterly Audits', 'Transparent Funds', 'Privacy Policy'].map((item) => (
            <span key={item} className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
              {item}
            </span>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className={`border-t ${dark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className={`text-xs ${dark ? 'text-gray-600' : 'text-gray-400'}`}>{t.footer.copy}</p>
          <p className={`text-xs ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            Made with 💚 by MAKARAND SAWANT
          </p>
        </div>
      </div>

    </footer>
  )
}