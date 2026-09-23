/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'en' | 'ru'
export type Theme = 'light' | 'dark'
export type LocalizedText = { en: string; ru: string }

type Preferences = {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  toggleTheme: () => void
  text: (value: LocalizedText) => string
}

const PreferencesContext = createContext<Preferences | null>(null)

function initialLanguage(): Language {
  const saved = localStorage.getItem('bannermatic-language')
  if (saved === 'en' || saved === 'ru') return saved
  return 'ru'
}

function initialTheme(): Theme {
  const saved = localStorage.getItem('bannermatic-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return 'dark'
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.lang = language
    document.title =
      language === 'ru'
        ? 'Bannermatic — производство digital-кампаний'
        : 'Bannermatic — Digital Campaign Production'
    localStorage.setItem('bannermatic-language', language)
  }, [language])

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#111112' : '#f7f5f0')
    localStorage.setItem('bannermatic-theme', theme)
  }, [theme])

  const value = useMemo<Preferences>(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme: () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
      text: (content) => content[language],
    }),
    [language, theme],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const preferences = useContext(PreferencesContext)
  if (!preferences) throw new Error('usePreferences must be used inside PreferencesProvider')
  return preferences
}
