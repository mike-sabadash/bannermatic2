import Reveal from '../components/Reveal'
import { usePreferences, type LocalizedText } from '../lib/preferences'

const facts: { label: LocalizedText; value: LocalizedText }[] = [
  { label: { en: 'Input', ru: 'Вход' }, value: { en: 'Media plan, brand system, key visual and copy deck', ru: 'Медиаплан, бренд-система, кей-вижуал и матрица текстов' } },
  { label: { en: 'Master', ru: 'Мастер' }, value: { en: 'Creative assembly, layout logic and motion direction', ru: 'Сборка креатива, логика композиции и моушн-направление' } },
  { label: { en: 'Scale', ru: 'Раскатка' }, value: { en: 'Display, video, social, rich media and DOOH adaptations', ru: 'Адаптации для display, video, social, rich media и DOOH' } },
  { label: { en: 'Delivery', ru: 'Сдача' }, value: { en: 'Platform-ready files, QA, specs and version control', ru: 'Готовые файлы под площадки, QA, спецификации и контроль версий' } },
]

export default function Studio() {
  const { language, text } = usePreferences()
  return (
    <section id="process" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 pb-28 sm:px-6 sm:pb-32 md:px-12 md:pb-56">
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3">
          <h2 className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground">{language === 'ru' ? 'Как мы масштабируем' : 'How we scale'}</h2>
        </Reveal>

        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <p className="max-w-[27ch] text-3xl font-light leading-[1.25] tracking-[-0.02em] text-foreground md:text-5xl">
              {language === 'ru'
                ? 'Мы превращаем идею кампании в production-систему — не теряя того, что делает её сильной.'
                : 'We turn a campaign idea into a production system — without losing what made the idea good.'}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-12 max-w-[54ch] text-[15px] leading-[1.9] text-muted-foreground md:mt-16">
              {language === 'ru'
                ? 'Многолетний опыт в баннерном производстве научил нас видеть места, где обычно ломается кампания: поздний медиаплан, экстремальные пропорции, ограничения площадок, десятки вариантов текста и анимация, которая отлично работает только в одном мастере. Мы решаем это на уровне системы. Сначала задаём визуальную и моушн-логику, затем адаптируем, тестируем и упаковываем каждое размещение к запуску. Бренд получает целостность, а агентство — production-партнёра, который одинаково хорошо понимает креатив и таблицу спецификаций.'
                : 'Years of banner-production experience taught us where campaigns usually break: late media plans, extreme aspect ratios, platform limits, endless copy variants and motion that works beautifully in one master but nowhere else. We solve that at the system level. First we define the visual and animation logic; then we adapt, test and package every placement for launch. Brands get consistency. Agencies get a production partner who understands both the idea and the specification sheet.'}
            </p>
          </Reveal>

          <dl className="mt-20 divide-y divide-border border-y border-border md:mt-28">
            {facts.map((fact, i) => (
              <Reveal key={fact.label.en} delay={i * 60}>
                <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-[1fr_2fr]">
                  <dt className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                    {text(fact.label)}
                  </dt>
                  <dd className="text-[15px] font-light text-foreground">{text(fact.value)}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
