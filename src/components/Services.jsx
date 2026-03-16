export default function Causes({ dark, t }) {
  return (
    <section id="causes" className={`py-28 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 ${dark ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
            {t.causes.badge}
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Syne, sans-serif' }}>
            {t.causes.heading}
          </h2>
          <p className={`max-w-xl mx-auto text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.causes.sub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.causes.items.map((item, i) => (
            <div key={i}
              className={`card-hover rounded-2xl overflow-hidden border group cursor-default ${dark ? 'bg-gray-800/60 border-gray-700 hover:border-emerald-700' : 'bg-gray-50 border-gray-200 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-50'}`}>

              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />

              <div className="p-7">
                {/* Icon + percent */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${dark ? 'bg-gray-700' : 'bg-white shadow-sm'}`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      style={{ fontFamily: 'Syne, sans-serif' }}>
                      {item.percent}%
                    </span>
                    <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>of funds</p>
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>

                {/* Progress bar */}
                <div className={`mt-5 h-1.5 rounded-full overflow-hidden ${dark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                    style={{ width: `${item.percent * 2.5}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Allocation note */}
        <p className={`text-center text-xs mt-10 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
          {t.causes.msg}
        </p>
      </div>
    </section>
  )
}
