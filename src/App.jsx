import React, { useState, useMemo, useCallback } from 'react'
import { cards } from './data/content.js'
import { useDarkMode } from './hooks/useDarkMode.js'
import { useCardProgress } from './hooks/useCardProgress.js'
import { CardProgressContext } from './context/CardProgressContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProviderSpotlight from './components/ProviderSpotlight.jsx'
import ProgressDashboard from './components/ProgressDashboard.jsx'
import FilterBar from './components/FilterBar.jsx'
import CardItem from './components/CardItem.jsx'
import CardModal from './components/CardModal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { isDark, toggle } = useDarkMode()
  const progress = useCardProgress()

  // Filter state
  const [selectedProvider, setSelectedProvider] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [showUnlearnedOnly, setShowUnlearnedOnly] = useState(false)

  // Modal state
  const [activeCard, setActiveCard] = useState(null)

  // Filter logic (AND)
  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      const matchProvider =
        selectedProvider === 'all' || card.providerId === selectedProvider
      const matchCategory =
        selectedCategory === 'all' || card.categoryId === selectedCategory
      const q = searchQuery.trim().toLowerCase()
      const matchSearch =
        !q ||
        card.title.toLowerCase().includes(q) ||
        card.summary.toLowerCase().includes(q) ||
        (card.points && card.points.some((p) => p.toLowerCase().includes(q)))
      const matchFav = !showFavoritesOnly || progress.favorites.has(card.id)
      const matchUnlearned = !showUnlearnedOnly || !progress.completed.has(card.id)
      return matchProvider && matchCategory && matchSearch && matchFav && matchUnlearned
    })
  }, [selectedProvider, selectedCategory, searchQuery, showFavoritesOnly, showUnlearnedOnly, progress.favorites, progress.completed])

  const handleSelectProvider = useCallback((providerId) => {
    setSelectedProvider(providerId)
    setSelectedCategory('all')
    setSearchQuery('')
  }, [])

  const handleReset = useCallback(() => {
    setSelectedProvider('all')
    setSelectedCategory('all')
    setSearchQuery('')
    setShowFavoritesOnly(false)
    setShowUnlearnedOnly(false)
  }, [])

  // Called from ProgressDashboard favorites chip
  const handleActivateFavoritesFilter = useCallback(() => {
    setShowFavoritesOnly(true)
    setShowUnlearnedOnly(false)
  }, [])

  return (
    <CardProgressContext.Provider value={progress}>
      <div className="min-h-screen bg-paper dark:bg-gray-950 transition-colors duration-300">
        <Header isDark={isDark} onToggleDark={toggle} completedCount={progress.completed.size} totalCount={cards.length} />

        <main>
          <Hero />

          <ProviderSpotlight onSelectProvider={handleSelectProvider} />

          {/* Progress Dashboard – between ProviderSpotlight and gallery */}
          <ProgressDashboard onFavoritesFilter={handleActivateFavoritesFilter} />

          {/* Card gallery section */}
          <section id="gallery" className="min-h-screen">
            {/* Section header */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-4">
              <div className="text-center mb-10">
                <span className="inline-block text-sm font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-3">
                  学習カード
                </span>
                <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-ink dark:text-white mb-3">
                  気になるカードから始めよう
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
                  カードをクリックすると詳しい解説や動画を確認できます。
                </p>
              </div>
            </div>

            <FilterBar
              selectedProvider={selectedProvider}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onProviderChange={setSelectedProvider}
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
              resultCount={filteredCards.length}
              showFavoritesOnly={showFavoritesOnly}
              onToggleFavorites={() => setShowFavoritesOnly((v) => !v)}
              showUnlearnedOnly={showUnlearnedOnly}
              onToggleUnlearned={() => setShowUnlearnedOnly((v) => !v)}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
              {filteredCards.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCards.map((card) => (
                    <CardItem
                      key={card.id}
                      card={card}
                      onClick={() => setActiveCard(card)}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="text-6xl mb-6" role="img" aria-label="見つかりません">
                    🔍
                  </div>
                  <h3 className="font-bold text-xl text-ink dark:text-white mb-2">
                    条件に合うカードがありません
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
                    検索ワードやフィルタを変えてみると見つかるかもしれません。
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-ink dark:bg-white text-white dark:text-ink font-semibold rounded-xl text-sm hover:opacity-80 transition-opacity"
                  >
                    フィルタをリセット
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />

        {/* Modal */}
        {activeCard && (
          <CardModal card={activeCard} onClose={() => setActiveCard(null)} />
        )}
      </div>
    </CardProgressContext.Provider>
  )
}
