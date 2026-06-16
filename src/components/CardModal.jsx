import React, { useEffect, useRef, useState, useCallback } from 'react'
import { X, ExternalLink, Play, CheckCircle2 } from 'lucide-react'
import { providers, commonProvider, categories, levels } from '../data/content.js'

const allProviders = [commonProvider, ...providers]

export default function CardModal({ card, onClose }) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const overlayRef = useRef(null)
  const closeButtonRef = useRef(null)
  const modalRef = useRef(null)

  const provider = allProviders.find((p) => p.id === card.providerId) || commonProvider
  const category = categories.find((c) => c.id === card.categoryId)
  const level = levels[card.level]

  // Focus trap + Esc
  useEffect(() => {
    const prev = document.activeElement
    closeButtonRef.current?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()

      // Focus trap
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)

    // Body scroll lock
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
      prev?.focus()
    }
  }, [onClose])

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === overlayRef.current) onClose()
    },
    [onClose]
  )

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl my-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden animate-modal-in modal-scroll"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Top gradient accent */}
        <div
          className="h-2 w-full flex-shrink-0"
          style={{ background: provider.gradient }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="閉じる"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 transition-all"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header meta */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: provider.accentSoft, color: provider.accent }}
            >
              <span aria-hidden="true">{provider.emoji}</span>
              {provider.name}
            </span>
            {category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                <span aria-hidden="true">{category.emoji}</span>
                {category.name}
              </span>
            )}
            {level && (
              <span
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold text-white"
                style={{ background: level.color }}
              >
                {level.label}
              </span>
            )}
          </div>

          {/* Title */}
          <h2
            id="modal-title"
            className="font-bold text-2xl sm:text-3xl text-ink dark:text-white mb-4 leading-tight"
          >
            {card.title}
          </h2>

          {/* Summary */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
            {card.summary}
          </p>

          {/* YouTube embed */}
          {card.youtube && (
            <div className="mb-8">
              {!videoLoaded ? (
                <button
                  onClick={() => setVideoLoaded(true)}
                  className="relative w-full rounded-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ aspectRatio: '16/9' }}
                  aria-label={`${card.title}の動画を再生`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${card.youtube}/hqdefault.jpg`}
                    alt={`${card.title}のサムネイル`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-xl group-hover:scale-110 transition-transform"
                    >
                      <Play
                        size={28}
                        fill="currentColor"
                        style={{ color: provider.accent, marginLeft: 3 }}
                      />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl px-3 py-2"
                    style={{ background: provider.accentSoft + 'dd' }}
                  >
                    <Play size={12} style={{ color: provider.accent }} fill="currentColor" />
                    <span className="text-xs font-semibold" style={{ color: provider.accent }}>
                      クリックして動画を再生
                    </span>
                  </div>
                </button>
              ) : (
                <div
                  className="w-full rounded-2xl overflow-hidden"
                  style={{ aspectRatio: '16/9' }}
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${card.youtube}?autoplay=1&rel=0`}
                    title={card.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          )}

          {/* Points */}
          {card.points && card.points.length > 0 && (
            <div className="mb-6">
              <h3 className="font-bold text-base text-ink dark:text-white mb-3 flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0"
                  style={{ background: provider.accent }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                ポイント
              </h3>
              <ul className="space-y-2.5">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: provider.accent }}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Steps */}
          {card.steps && card.steps.length > 0 && (
            <div className="mb-6">
              <h3 className="font-bold text-base text-ink dark:text-white mb-3 flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0"
                  style={{ background: provider.accent }}
                  aria-hidden="true"
                >
                  →
                </span>
                手順
              </h3>
              <ol className="space-y-3">
                {card.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: provider.accent }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tips */}
          {card.tips && card.tips.length > 0 && (
            <div className="mb-6">
              <div
                className="rounded-2xl p-4"
                style={{ background: provider.accentSoft, borderLeft: `4px solid ${provider.accent}` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg" aria-hidden="true">💡</span>
                  <span className="font-bold text-sm" style={{ color: provider.accent }}>
                    ヒント
                  </span>
                </div>
                {card.tips.map((tip, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: provider.accent + 'cc' }}>
                    {tip}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {provider.officialUrl && (
            <a
              href={provider.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-white font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: provider.gradient }}
            >
              {provider.name}の公式サイトを開く
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
