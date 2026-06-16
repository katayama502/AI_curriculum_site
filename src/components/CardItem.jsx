import React from 'react'
import { Play, ChevronRight } from 'lucide-react'
import { providers, commonProvider, categories, levels } from '../data/content.js'

const allProviders = [commonProvider, ...providers]

export default function CardItem({ card, onClick }) {
  const provider = allProviders.find((p) => p.id === card.providerId) || commonProvider
  const category = categories.find((c) => c.id === card.categoryId)
  const level = levels[card.level]

  return (
    <article
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label={`${card.title}の詳細を見る`}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col animate-fade-in"
      style={{
        '--accent': provider.accent,
        '--accent-soft': provider.accentSoft,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1.5 w-full flex-shrink-0"
        style={{ background: provider.gradient }}
        aria-hidden="true"
      />

      {/* Thumbnail (YouTube) */}
      {card.youtube && (
        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img
            src={`https://img.youtube.com/vi/${card.youtube}/hqdefault.jpg`}
            alt={`${card.title}のサムネイル`}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-lg group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <Play size={20} fill="currentColor" style={{ color: provider.accent, marginLeft: 2 }} />
            </div>
          </div>
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {/* Provider chip */}
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: provider.accentSoft, color: provider.accent }}
          >
            <span aria-hidden="true">{provider.emoji}</span>
            {provider.name}
          </span>

          {/* Category */}
          {category && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <span aria-hidden="true">{category.emoji}</span>
              {category.name}
            </span>
          )}

          {/* Level badge */}
          {level && (
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-white ml-auto"
              style={{ background: level.color }}
            >
              {level.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base sm:text-lg text-ink dark:text-white mb-2 line-clamp-2 leading-snug">
          {card.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1 mb-4">
          {card.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-end">
          <span
            className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
            style={{ color: provider.accent }}
          >
            くわしく見る
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>

      {/* Hover accent border */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-30 transition-all pointer-events-none"
        style={{ borderColor: provider.accent + '33' }}
        aria-hidden="true"
      />
    </article>
  )
}
