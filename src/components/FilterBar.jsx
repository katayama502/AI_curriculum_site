import React from 'react'
import { Search, X } from 'lucide-react'
import { providers, commonProvider, categories } from '../data/content.js'

const ALL_PROVIDERS = [
  { id: 'all', name: 'すべて', emoji: '🔍', accent: '#6B7280', accentSoft: '#F3F4F6' },
  { ...commonProvider },
  ...providers,
]

const ALL_CATEGORIES = [
  { id: 'all', name: 'すべて', emoji: '📋' },
  ...categories,
]

export default function FilterBar({
  selectedProvider,
  selectedCategory,
  searchQuery,
  onProviderChange,
  onCategoryChange,
  onSearchChange,
  resultCount,
  showFavoritesOnly,
  onToggleFavorites,
  showUnlearnedOnly,
  onToggleUnlearned,
}) {
  const hasActiveFilter =
    selectedProvider !== 'all' ||
    selectedCategory !== 'all' ||
    searchQuery ||
    showFavoritesOnly ||
    showUnlearnedOnly

  const handleReset = () => {
    onProviderChange('all')
    onCategoryChange('all')
    onSearchChange('')
    if (showFavoritesOnly) onToggleFavorites()
    if (showUnlearnedOnly) onToggleUnlearned()
  }

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-16 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-3">
        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="カードを検索…"
            aria-label="カードを検索"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-common/40 focus:border-brand-common transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="検索クリア"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Quick toggles: Favorites & Unlearned */}
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
            クイック絞り込み
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onToggleFavorites}
              aria-pressed={showFavoritesOnly}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                showFavoritesOnly
                  ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                  : 'bg-rose-50 dark:bg-rose-900/20 text-rose-500 dark:text-rose-400 border-transparent hover:bg-rose-100 dark:hover:bg-rose-900/30'
              }`}
            >
              <span aria-hidden="true">{showFavoritesOnly ? '♥' : '♡'}</span>
              お気に入り
            </button>

            <button
              onClick={onToggleUnlearned}
              aria-pressed={showUnlearnedOnly}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                showUnlearnedOnly
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                  : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-transparent hover:bg-amber-100 dark:hover:bg-amber-900/30'
              }`}
            >
              <span aria-hidden="true">📖</span>
              未学習
            </button>
          </div>
        </div>

        {/* Provider filter */}
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
            AIで絞り込む
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_PROVIDERS.map((p) => {
              const isActive = selectedProvider === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => onProviderChange(p.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border"
                  style={
                    isActive
                      ? {
                          background: p.accent,
                          color: '#fff',
                          borderColor: p.accent,
                          boxShadow: `0 2px 8px ${p.accent}40`,
                        }
                      : {
                          background: p.accentSoft || '#F3F4F6',
                          color: p.accent || '#6B7280',
                          borderColor: 'transparent',
                        }
                  }
                  aria-pressed={isActive}
                >
                  <span aria-hidden="true">{p.emoji}</span>
                  {p.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Category filter */}
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
            カテゴリで絞り込む
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((c) => {
              const isActive = selectedCategory === c.id
              return (
                <button
                  key={c.id}
                  onClick={() => onCategoryChange(c.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? 'bg-ink text-white border-ink dark:bg-white dark:text-ink dark:border-white shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-transparent hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-pressed={isActive}
                >
                  <span aria-hidden="true">{c.emoji}</span>
                  {c.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Result count + reset */}
        <div className="flex items-center justify-between pt-1">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            <span className="font-bold text-ink dark:text-white">{resultCount}</span>件のカード
          </p>
          {hasActiveFilter && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={12} />
              フィルタをリセット
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
