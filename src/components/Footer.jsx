import React from 'react'
import { ExternalLink, Heart } from 'lucide-react'
import { site, providers } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-ink dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top: logo + links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" role="img" aria-label="ロゴ">🤖</span>
              <span className="font-jakarta font-bold text-xl text-white">
                はじめてのAIナビ
              </span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-xs">
              3大AIの使い方をカード＋動画で学べる初心者向け学習サイト。
              登録不要・完全無料でどこからでも読めます。
            </p>
          </div>

          {/* Provider links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              各AIの公式サイト
            </p>
            <ul className="space-y-2">
              {providers.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <span aria-hidden="true">{p.emoji}</span>
                    <span
                      className="font-medium group-hover:underline"
                      style={{ color: p.accent }}
                    >
                      {p.name}
                    </span>
                    <ExternalLink size={11} className="opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Disclaimer */}
          <p className="text-xs text-gray-500 dark:text-gray-600 leading-relaxed mb-4 max-w-2xl">
            {site.footer}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-600 dark:text-gray-700">
            <p>
              © {new Date().getFullYear()} はじめてのAIナビ. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart size={11} className="text-red-400" fill="currentColor" /> for beginners
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
