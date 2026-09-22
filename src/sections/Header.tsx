import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { usePreferences } from '../lib/preferences'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { language, setLanguage, theme, toggleTheme } = usePreferences()
  const links = [
    { label: language === 'ru' ? 'Кейсы' : 'Work', hash: 'work' },
    { label: language === 'ru' ? 'Процесс' : 'Process', hash: 'process' },
    { label: language === 'ru' ? 'Контакт' : 'Contact', hash: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (hash: string) => {
    const scroll = () =>
      hash === 'top'
        ? window.scrollTo({ top: 0, behavior: 'smooth' })
        : document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })

    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(scroll, 150)
    } else {
      scroll()
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-5 py-5 sm:px-6 sm:py-6 md:px-12 md:py-8">
        <button
          onClick={() => goTo('top')}
          className="flex items-center gap-2.5 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-foreground sm:gap-3 sm:text-[12px] sm:tracking-[0.18em] md:text-[13px] md:tracking-[0.22em]"
        >
          <img src="/brand/bannermatic-mark.webp" alt="" aria-hidden="true" className="h-[22px] w-auto sm:h-6" />
          <span>Bannermatic</span>
        </button>
        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
        <nav className="hidden items-baseline gap-4 sm:flex sm:gap-6 md:gap-10">
          {links.map((link) => (
            <button
              key={link.hash}
              onClick={() => goTo(link.hash)}
              className="link-sweep whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-[12px] sm:tracking-[0.18em] md:text-[13px] md:tracking-[0.22em]"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1 border-l border-border pl-3 sm:pl-5">
          <div className="flex" aria-label={language === 'ru' ? 'Выбор языка' : 'Language'}>
            {(['en', 'ru'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`px-1.5 py-1 text-[10px] uppercase tracking-[0.14em] transition-colors sm:text-[11px] ${
                  language === option ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label={language === 'ru' ? 'Переключить тему' : 'Toggle theme'}
            className="ml-1 grid size-7 place-items-center rounded-full border border-border text-sm text-foreground transition-colors hover:bg-muted"
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '◐'}</span>
          </button>
        </div>
        </div>
      </div>
    </header>
  )
}
