import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 pb-12 sm:px-6 md:px-12">
      <Reveal>
        <p className="mb-10 text-[12px] uppercase tracking-[0.3em] text-[#6f6c64] md:mb-14">
          Start a campaign
        </p>
      </Reveal>
      <Reveal delay={100}>
        <p className="max-w-[15ch] text-[10vw] font-light leading-[1.02] tracking-[-0.035em] text-[#141414] md:text-[6vw]">
          Bring the idea. We’ll make it run everywhere.
        </p>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-20 grid gap-10 text-[13px] leading-[1.9] text-[#6f6c64] sm:grid-cols-3 md:mt-32">
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-[#141414]">Good starting point</p>
            <p>
              Media plan<br />Key visual or Figma master<br />Copy and legal matrix
            </p>
          </div>
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-[#141414]">What we return</p>
            <p>
              Campaign master<br />Responsive adaptations<br />Tested delivery package
            </p>
          </div>
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-[#141414]">Built for</p>
            <p>
              Brands<br />Creative agencies<br />Media and production teams
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-20 flex items-baseline justify-between gap-4 border-t border-[#141414]/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-[#6f6c64] sm:text-[12px] sm:tracking-[0.22em] md:mt-28">
        <span>© 2026 Bannermatic</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="link-sweep uppercase tracking-[0.22em]"
        >
          Back to top
        </button>
      </div>
    </footer>
  )
}
