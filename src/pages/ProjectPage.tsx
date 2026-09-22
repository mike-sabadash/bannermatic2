import { Link, Navigate, useParams } from 'react-router'
import Header from '../sections/Header'
import Reveal from '../components/Reveal'
import MotionBanner from '../components/MotionBanner'
import ParallaxHero from '../components/ParallaxHero'
import { projects } from '../data/projects'
import { usePreferences } from '../lib/preferences'

export default function ProjectPage() {
  const { language, text } = usePreferences()
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)

  if (index === -1) return <Navigate to="/" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  const facts: Array<{ label: string; value: string; logo?: string; logoAlt?: string }> = [
    { label: language === 'ru' ? 'Клиент' : 'Client', value: project.client },
    { label: language === 'ru' ? 'Кампания' : 'Campaign', value: text(project.type) },
    { label: language === 'ru' ? 'Мастер' : 'Master', value: project.master },
    { label: language === 'ru' ? 'Каналы' : 'Channels', value: project.channels },
    { label: language === 'ru' ? 'Сдача' : 'Delivery', value: text(project.delivery) },
    ...(project.agency
      ? [{
          label: language === 'ru' ? 'Агентство' : 'Agency',
          value: project.agency.name,
          logo: project.agency.logo,
          logoAlt: project.agency.logoAlt,
        }]
      : []),
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      <main className="mx-auto max-w-[1600px] px-5 pt-28 sm:px-6 sm:pt-32 md:px-12 md:pt-44">
        {/* Title block */}
        <div className="mb-14 md:mb-24">
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between text-[12px] uppercase tracking-[0.3em] text-muted-foreground md:mb-12">
              <span>
                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <span>{project.client}</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-[16ch] text-[11vw] font-light leading-[1.02] tracking-[-0.03em] text-foreground md:text-[6.5vw]">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[34ch] text-xl font-light leading-[1.4] tracking-[-0.01em] text-muted-foreground md:mt-12 md:text-2xl">
              {text(project.lead)}
            </p>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={240}>
          <figure>
            <div className="overflow-hidden">
              {project.slug === 'suzuki-service-campaign' ? (
                <ParallaxHero source={project.image} alt={text(project.imageAlt)} />
              ) : (
                <img
                  src={project.image}
                  alt={text(project.imageAlt)}
                  className="hero-image block aspect-[2048/1042] w-full object-cover"
                />
              )}
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>{text(project.type)}</span>
              <span>{project.channels}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Facts + text */}
        <div className="grid gap-16 py-28 md:grid-cols-12 md:gap-8 md:py-44">
          <Reveal className="md:col-span-3">
            <dl className="divide-y divide-border border-y border-border">
              {facts.map((fact) => (
                <div key={fact.label} className="py-5">
                  <dt className="mb-1 text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="flex items-center gap-5 text-[15px] font-light text-foreground">
                    <span>{fact.value}</span>
                    {fact.logo && (
                      <img src={fact.logo} alt={fact.logoAlt ?? fact.value} className="h-7 w-auto object-contain" />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            {project.body[language].map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p
                  className={`max-w-[56ch] text-[15px] leading-[1.9] text-muted-foreground ${
                    i === 0
                      ? 'text-xl font-light leading-[1.6] tracking-[-0.01em] text-foreground md:text-2xl'
                      : 'mt-10 md:mt-14'
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {project.motionBanner && (
          <Reveal>
            <figure className="pb-28 md:pb-44">
              <div className="relative mx-auto w-fit md:mx-0 md:ml-[41.666667%]">
                <div className="absolute right-full top-0 mr-16 hidden items-start gap-3 md:flex">
                  <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[40px] font-thin leading-none tracking-[-0.05em] text-white/10">
                    MASTER
                  </span>
                  <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[40px] font-thin leading-none tracking-[-0.05em] text-white/25">
                    240 × 400
                  </span>
                </div>
                <MotionBanner
                  source={project.motionBanner.source}
                  poster={project.motionBanner.poster}
                  label={text(project.motionBanner.label)}
                />
              </div>
            </figure>
          </Reveal>
        )}

        <Reveal>
          <figure className="pb-28 md:pb-44">
            {project.storyboardFrames ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-8">
                {project.storyboardFrames.map((frame) => (
                  <div key={frame.image} className="overflow-hidden bg-[#0b0d0e]">
                    <img
                      src={frame.image}
                      alt={text(frame.alt)}
                      className="block h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden bg-[#0b0d0e]">
                <img
                  src={project.storyboard}
                  alt={text(project.storyboardAlt)}
                  className="block h-auto w-full object-contain"
                />
              </div>
            )}
            {!project.storyboardFrames && (
              <figcaption className="mt-5 flex items-baseline justify-between gap-6 text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>{language === 'ru' ? 'Моушн-раскадровка и логика мастера' : 'Motion storyboard & master logic'}</span>
                <span className="text-right">{project.master}</span>
              </figcaption>
            )}
          </figure>
        </Reveal>

        {/* Next project */}
        <Reveal>
          <Link
            to={`/work/${next.slug}`}
            className="group block border-t border-border py-16 md:py-24"
          >
            <p className="mb-6 text-[12px] uppercase tracking-[0.3em] text-muted-foreground">
              {language === 'ru' ? 'Следующая кампания' : 'Next campaign'}
            </p>
            <span className="block text-[9vw] font-light leading-[1.05] tracking-[-0.03em] text-foreground transition-transform duration-500 ease-out group-hover:translate-x-4 md:text-[5vw]">
              {next.name}
              <span className="ml-4 inline-block align-middle text-[0.5em] text-muted-foreground transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </span>
          </Link>
        </Reveal>

        <div className="flex items-baseline justify-between border-t border-border pb-12 pt-6 text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/" className="link-sweep">
            ← {language === 'ru' ? 'Все кампании' : 'All campaigns'}
          </Link>
          <span>© 2026 Bannermatic</span>
        </div>
      </main>
    </div>
  )
}
