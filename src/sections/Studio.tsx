import Reveal from '../components/Reveal'

const facts = [
  { label: 'Input', value: 'Media plan, brand system, key visual and copy deck' },
  { label: 'Master', value: 'Creative assembly, layout logic and motion direction' },
  { label: 'Scale', value: 'Display, video, social, rich media and DOOH adaptations' },
  { label: 'Delivery', value: 'Platform-ready files, QA, specs and version control' },
]

export default function Studio() {
  return (
    <section id="process" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 pb-28 sm:px-6 sm:pb-32 md:px-12 md:pb-56">
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3">
          <h2 className="text-[12px] uppercase tracking-[0.3em] text-[#6f6c64]">How we scale</h2>
        </Reveal>

        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <p className="max-w-[26ch] text-3xl font-light leading-[1.25] tracking-[-0.02em] text-[#141414] md:text-5xl">
              We turn a campaign idea into a production system — without losing what made the idea
              good.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-12 max-w-[52ch] text-[15px] leading-[1.9] text-[#6f6c64] md:mt-16">
              Years of banner-production experience taught us where campaigns usually break: late
              media plans, extreme aspect ratios, platform limits, endless copy variants and motion
              that works beautifully in one master but nowhere else. We solve that at the system
              level. First we define the visual and animation logic; then we adapt, test and package
              every placement for launch. Brands get consistency. Agencies get a production partner
              who understands both the idea and the specification sheet.
            </p>
          </Reveal>

          <dl className="mt-20 divide-y divide-[#141414]/10 border-y border-[#141414]/10 md:mt-28">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 60}>
                <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-[1fr_2fr]">
                  <dt className="text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
                    {fact.label}
                  </dt>
                  <dd className="text-[15px] font-light text-[#141414]">{fact.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
