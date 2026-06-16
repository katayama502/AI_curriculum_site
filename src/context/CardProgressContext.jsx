import React, { createContext, useContext } from 'react'

export const CardProgressContext = createContext(null)

export function useProgress() {
  const ctx = useContext(CardProgressContext)
  if (!ctx) throw new Error('useProgress must be used within CardProgressContext.Provider')
  return ctx
}
