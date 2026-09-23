import { usePreferences } from '../lib/preferences'

export default function Hero() {
  const { language } = usePreferences()

  return (
    <section
      id="top"
      className="relative isolate h-[100svh] min-h-[760px] overflow-hidden border-t border-white/[0.06] bg-[#111112] text-white"
    >
      <img
        src="/home-hero-bg.webp"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-5 pt-[clamp(5.5rem,12vh,8.5rem)] text-center sm:px-8">
        <img
          src="/home-hero-logo.png"
          alt="Bannermatic"
          width="166"
          height="238"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="h-auto w-[58px] drop-shadow-[0_18px_14px_rgba(0,0,0,0.35)] sm:w-[72px] lg:w-[84px]"
        />

        <h1 className="mt-10 max-w-[19ch] text-[clamp(2.55rem,4.4vw,4.5rem)] font-light leading-[1.08] tracking-[-0.035em] text-[#f1f1ef] sm:mt-12">
          {language === 'ru'
            ? 'От медиаплана до готовой к запуску кампании.'
            : 'From media plan to a production-ready campaign.'}
        </h1>

        <p className="mt-7 max-w-[28ch] text-[15px] font-light leading-[1.35] text-white/35 sm:text-lg">
          {language === 'ru'
            ? 'От медиаплана до готовой к запуску кампании.'
            : 'From media plan to a production-ready campaign.'}
        </p>

        <div className="mt-10 flex items-center gap-4 sm:mt-12 sm:gap-7">
          <a
            href="https://studio.bannermatic.online/login"
            className="inline-flex h-12 min-w-[132px] items-center justify-center rounded-[5px] border border-white/45 px-7 text-[12px] font-medium uppercase tracking-[0.04em] text-white/80 transition-colors duration-300 hover:border-white hover:bg-white/5 hover:text-white sm:min-w-[164px]"
          >
            {language === 'ru' ? 'Войти' : 'Log in'}
          </a>
          <a
            href="https://studio.bannermatic.online/signup"
            className="inline-flex h-12 min-w-[132px] items-center justify-center rounded-[5px] bg-[#fff06a] px-7 text-[12px] font-semibold uppercase tracking-[0.04em] text-[#111112] transition-colors duration-300 hover:bg-[#fff48a] sm:min-w-[164px]"
          >
            {language === 'ru' ? 'Попробовать' : 'Try free'}
          </a>
        </div>
      </div>

      <img
        src="/home-hero-safari.webp"
        alt={language === 'ru' ? 'Кампании Bannermatic в окне браузера' : 'Bannermatic campaigns inside a browser window'}
        width="1971"
        height="586"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="pointer-events-none absolute bottom-[-1.5rem] left-1/2 z-20 h-auto w-[155vw] max-w-none -translate-x-1/2 sm:bottom-[-2.5rem] sm:w-[118vw] lg:bottom-[-2rem] lg:w-[min(88vw,140vh)] lg:max-w-[1780px]"
      />
    </section>
  )
}
