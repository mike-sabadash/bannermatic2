import Reveal from '../components/Reveal'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1600px] px-5 pt-32 sm:px-6 sm:pt-36 md:px-12 md:pt-48">
      {/* Statement */}
      <div className="mb-16 md:mb-28">
        <Reveal>
          <p className="mb-8 text-[12px] uppercase tracking-[0.3em] text-[#6f6c64] md:mb-12">
            Digital campaign production — from master to media plan
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="max-w-[14ch] text-[13vw] font-light leading-[1.02] tracking-[-0.03em] text-[#141414] md:text-[7.5vw] lg:text-[6.2vw]">
            One master. Every format. Ready to run.
          </h1>
        </Reveal>
      </div>

      {/* The single hero image */}
      <Reveal delay={200}>
        <figure>
          <div className="overflow-hidden">
            <img
              src="/projects/toyota-lc200-keyvisual.webp"
              alt="Toyota Land Cruiser 200 campaign key visual in a mountain landscape"
              className="hero-image block aspect-[4/3] w-full object-cover sm:aspect-[2048/1042]"
            />
          </div>
          <figcaption className="mt-5 flex items-baseline justify-between text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
            <span>Toyota Land Cruiser 200 — Campaign System</span>
            <span className="hidden sm:inline">Key visual / Motion / Adaptation</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  )
}
