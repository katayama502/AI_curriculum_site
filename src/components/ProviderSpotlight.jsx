import React from 'react'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { providers } from '../data/content.js'

export default function ProviderSpotlight({ onSelectProvider }) {
  const handleClick = (providerId) => {
    onSelectProvider(providerId)
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-3">
            3つのAI
          </span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-ink dark:text-white mb-4">
            どんなAIが使えるの？
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            それぞれの得意分野を知ると、使い分けがぐっとラクになります。
            <br className="hidden sm:block" />
            カードをクリックするとそのAIのカードだけ表示されます。
          </p>
        </div>

        {/* Provider cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {providers.map((p) => (
            <article
              key={p.id}
              onClick={() => handleClick(p.id)}
              className="group relative bg-paper dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Top gradient accent */}
              <div
                className="h-2 w-full"
                style={{ background: p.gradient }}
                aria-hidden="true"
              />

              <div className="p-6 sm:p-7">
                {/* Emoji + name */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-14 h-14 rounded-2xl text-3xl shadow-sm"
                      style={{ background: p.accentSoft }}
                      role="img"
                      aria-label={p.name}
                    >
                      {p.emoji}
                    </span>
                    <div>
                      <h3
                        className="font-jakarta font-bold text-xl leading-tight"
                        style={{ color: p.accent }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{p.vendor}</p>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-1 transition-all mt-1"
                  />
                </div>

                {/* Tagline */}
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                  {p.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 line-clamp-3">
                  {p.description}
                </p>

                {/* Best for */}
                <div
                  className="flex items-start gap-2 rounded-xl px-3 py-2.5 mb-4"
                  style={{ background: p.accentSoft }}
                >
                  <span className="text-sm mt-0.5">👍</span>
                  <p className="text-xs font-medium leading-relaxed" style={{ color: p.accent }}>
                    {p.bestFor}
                  </p>
                </div>

                {/* Free plan */}
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">{p.freePlan}</p>

                {/* Official link */}
                <a
                  href={p.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color: p.accent }}
                >
                  公式サイトを開く
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Hover overlay hint */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: p.gradient }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
