import Reveal from '../components/Reveal'
import { usePreferences } from '../lib/preferences'

export default function Contact() {
  const { language } = usePreferences()
  return (
    <footer id="contact" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 pb-12 sm:px-6 md:px-12">
      <Reveal>
        <p className="mb-10 text-[12px] uppercase tracking-[0.3em] text-muted-foreground md:mb-14">
          {language === 'ru' ? 'Запустить кампанию' : 'Start a campaign'}
        </p>
      </Reveal>
      <Reveal delay={100}>
        <p className="max-w-[16ch] text-[10vw] font-light leading-[1.02] tracking-[-0.035em] text-foreground md:text-[6vw]">
          {language === 'ru' ? 'Приносите идею. Мы запустим её везде.' : 'Bring the idea. We’ll make it run everywhere.'}
        </p>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-20 grid gap-10 text-[13px] leading-[1.9] text-muted-foreground sm:grid-cols-3 md:mt-32">
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-foreground">{language === 'ru' ? 'Хороший старт' : 'Good starting point'}</p>
            <p>
              {language === 'ru' ? <>Медиаплан<br />Кей-вижуал или мастер в Figma<br />Матрица текстов и legal</> : <>Media plan<br />Key visual or Figma master<br />Copy and legal matrix</>}
            </p>
          </div>
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-foreground">{language === 'ru' ? 'Что вы получите' : 'What we return'}</p>
            <p>
              {language === 'ru' ? <>Мастер кампании<br />Адаптивные форматы<br />Проверенный пакет к размещению</> : <>Campaign master<br />Responsive adaptations<br />Tested delivery package</>}
            </p>
          </div>
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-foreground">{language === 'ru' ? 'Для кого' : 'Built for'}</p>
            <p>
              {language === 'ru' ? <>Бренды<br />Креативные агентства<br />Медиа- и production-команды</> : <>Brands<br />Creative agencies<br />Media and production teams</>}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-20 flex items-baseline justify-between gap-4 border-t border-border pt-6 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[12px] sm:tracking-[0.22em] md:mt-28">
        <span>© 2026 Bannermatic</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="link-sweep uppercase tracking-[0.22em]"
        >
          {language === 'ru' ? 'Наверх' : 'Back to top'}
        </button>
      </div>
    </footer>
  )
}
