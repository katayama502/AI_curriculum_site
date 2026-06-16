import React from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import { site, providers } from '../data/content.js'

export default function Hero() {
  const handleScrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/30" />

        {/* Blob 1 – GPT green */}
        <div
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-blob"
          style={{ background: 'radial-gradient(circle, #10A37F, transparent 70%)' }}
        />
        {/* Blob 2 – Gemini blue */}
        <div
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-2000"
          style={{ background: 'radial-gradient(circle, #4285F4, transparent 70%)' }}
        />
        {/* Blob 3 – Claude orange */}
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-15 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"
          style={{ background: 'radial-gradient(circle, #D97757, transparent 70%)' }}
        />
        {/* Blob 4 – Common indigo */}
        <div
          className="absolute top-10 right-1/4 w-56 h-56 rounded-full opacity-15 dark:opacity-8 blur-3xl animate-blob animation-delay-2000"
          style={{ background: 'radial-gradient(circle, #6366F1, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/60 dark:border-white/20 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <Sparkles size={14} className="text-brand-common" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            登録不要・完全無料で読めます
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-ink dark:text-white tracking-tight">
          {site.title}
          <br />
          <span
            className="gradient-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #10A37F 0%, #4285F4 50%, #D97757 100%)',
            }}
          >
            {site.subtitle}
          </span>
        </h1>

        {/* Lead */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
          {site.heroLead}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">{site.heroNote}</p>

        {/* Provider chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {providers.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border border-white/60 dark:border-white/10 backdrop-blur-sm"
              style={{
                background: p.accentSoft,
                borderColor: p.accent + '40',
              }}
            >
              <span className="text-lg" role="img" aria-label={p.name}>
                {p.emoji}
              </span>
              <span
                className="font-jakarta font-bold text-sm"
                style={{ color: p.accent }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleScrollToGallery}
          className="group inline-flex items-center gap-3 bg-ink dark:bg-white text-white dark:text-ink font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          学びはじめる
          <ArrowDown
            size={20}
            className="group-hover:translate-y-1 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gray-400 dark:to-gray-500" />
      </div>
    </section>
  )
}
