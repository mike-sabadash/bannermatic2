import { Link, Navigate, useParams } from 'react-router'
import Header from '../sections/Header'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)

  if (index === -1) return <Navigate to="/" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  const facts = [
    { label: 'Client', value: project.client },
    { label: 'Campaign', value: project.type },
    { label: 'Master', value: project.master },
    { label: 'Channels', value: project.channels },
    { label: 'Delivery', value: project.delivery },
  ]

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <Header />
      <main className="mx-auto max-w-[1600px] px-5 pt-28 sm:px-6 sm:pt-32 md:px-12 md:pt-44">
        {/* Title block */}
        <div className="mb-14 md:mb-24">
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between text-[12px] uppercase tracking-[0.3em] text-[#6f6c64] md:mb-12">
              <span>
                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <span>{project.client}</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-[16ch] text-[11vw] font-light leading-[1.02] tracking-[-0.03em] text-[#141414] md:text-[6.5vw]">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[30ch] text-xl font-light leading-[1.4] tracking-[-0.01em] text-[#6f6c64] md:mt-12 md:text-2xl">
              {project.lead}
            </p>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={240}>
          <figure>
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="hero-image block aspect-[2048/1042] w-full object-cover"
              />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
              <span>{project.type}</span>
              <span>{project.channels}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Facts + text */}
        <div className="grid gap-16 py-28 md:grid-cols-12 md:gap-8 md:py-44">
          <Reveal className="md:col-span-3">
            <dl className="divide-y divide-[#141414]/10 border-y border-[#141414]/10">
              {facts.map((fact) => (
                <div key={fact.label} className="py-5">
                  <dt className="mb-1 text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
                    {fact.label}
                  </dt>
                  <dd className="text-[15px] font-light text-[#141414]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            {project.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p
                  className={`max-w-[54ch] text-[15px] leading-[1.9] text-[#6f6c64] ${
                    i === 0
                      ? 'text-xl font-light leading-[1.6] tracking-[-0.01em] text-[#141414] md:text-2xl'
                      : 'mt-10 md:mt-14'
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <figure className="pb-28 md:pb-44">
            <div className="overflow-hidden bg-[#0b0d0e]">
              <img
                src={project.storyboard}
                alt={project.storyboardAlt}
                className="block aspect-square w-full object-cover"
              />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between gap-6 text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
              <span>Motion storyboard &amp; master logic</span>
              <span className="text-right">{project.master}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Next project */}
        <Reveal>
          <Link
            to={`/work/${next.slug}`}
            className="group block border-t border-[#141414]/10 py-16 md:py-24"
          >
            <p className="mb-6 text-[12px] uppercase tracking-[0.3em] text-[#6f6c64]">
              Next campaign
            </p>
            <span className="block text-[9vw] font-light leading-[1.05] tracking-[-0.03em] text-[#141414] transition-transform duration-500 ease-out group-hover:translate-x-4 md:text-[5vw]">
              {next.name}
              <span className="ml-4 inline-block align-middle text-[0.5em] text-[#6f6c64] transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </span>
          </Link>
        </Reveal>

        <div className="flex items-baseline justify-between border-t border-[#141414]/10 pb-12 pt-6 text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
          <Link to="/" className="link-sweep">
            ← All campaigns
          </Link>
          <span>© 2026 Bannermatic</span>
        </div>
      </main>
    </div>
  )
}
