import Reveal from '../components/Reveal'
import LoadableImage from '../components/LoadableImage'
import { usePreferences } from '../lib/preferences'

export default function Hero() {
  const { language } = usePreferences()
  const clientLogos = [
    { src: '/brand/suzuki.webp', alt: 'Suzuki', width: 86 },
    { src: '/brand/toyota.webp', alt: 'Toyota', width: 106 },
    { src: '/brand/lada.webp', alt: 'Lada', width: 68 },
    { src: '/brand/parimatch.webp', alt: 'Parimatch', width: 81, accent: true },
    { src: '/brand/msi.webp', alt: 'MSI', width: 95 },
    { src: '/brand/lime.webp', alt: 'Lime', width: 76 },
  ]
  return (
    <section id="top" className="mx-auto max-w-[1600px] px-5 pt-28 sm:px-6 sm:pt-32 md:px-12 md:pt-40">
      <div className="mb-20 grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:mb-24 md:grid-cols-6 md:gap-x-10 lg:mb-28">
        {clientLogos.map((logo) => (
          <div key={logo.alt} className="flex min-h-12 items-center md:justify-start">
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={`block h-auto max-h-9 max-w-full object-contain object-left ${logo.accent ? 'opacity-75' : 'opacity-30'}`}
            />
          </div>
        ))}
      </div>
      {/* Statement */}
      <div className="mb-16 md:mb-28">
        <Reveal>
          <p className="mb-8 text-[12px] uppercase tracking-[0.3em] text-muted-foreground md:mb-12">
            {language === 'ru'
              ? 'Производство digital-кампаний — от мастера до медиаплана'
              : 'Digital campaign production — from master to media plan'}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="max-w-[15ch] text-[13vw] font-light leading-[1.02] tracking-[-0.03em] text-foreground md:text-[7.5vw] lg:text-[6.2vw]">
            {language === 'ru' ? 'Один мастер. Все форматы. Готово к запуску.' : 'One master. Every format. Ready to run.'}
          </h1>
        </Reveal>
      </div>

      {/* The single hero image */}
      <Reveal delay={200}>
        <figure>
          <LoadableImage
            src="/projects/toyota-lc200-keyvisual.webp"
            alt={language === 'ru' ? 'Кей-вижуал кампании Toyota Land Cruiser 200 в горах' : 'Toyota Land Cruiser 200 campaign key visual in a mountain landscape'}
            eager
            containerClassName="aspect-[4/3] sm:aspect-[2048/1042]"
            className="hero-image block h-full w-full object-cover"
          />
          <figcaption className="mt-5 flex items-baseline justify-between text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
            <span>Toyota Land Cruiser 200 — {language === 'ru' ? 'Система кампании' : 'Campaign System'}</span>
            <span className="hidden sm:inline">{language === 'ru' ? 'Кей-вижуал / Моушн / Адаптация' : 'Key visual / Motion / Adaptation'}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  )
}
