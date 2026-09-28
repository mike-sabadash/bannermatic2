import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform, useVelocity } from 'motion/react'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import { usePreferences } from '../lib/preferences'

export default function Works() {
  const { language, text } = usePreferences()
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [finePointer, setFinePointer] = useState(false)
  const reducedMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.5 })
  const velocity = useVelocity(springX)
  const rotate = useTransform(velocity, [-1200, 1200], [-10, 10], { clamp: true })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorSpringX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.6 })
  const cursorSpringY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.6 })

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => { setFinePointer(query.matches); if (!query.matches) setActive(null) }
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const onMove = (event: MouseEvent) => {
    if (!finePointer) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
    cursorX.set(event.clientX)
    cursorY.set(event.clientY)
  }

  const showPreview = finePointer && !reducedMotion && active !== null
  return (
    <section id="work" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-28 sm:px-6 sm:py-32 md:px-12 md:py-56">
      <Reveal className="mb-14 flex items-baseline justify-between md:mb-20">
        <h2 className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground">{language === 'ru' ? 'Кейсы кампаний' : 'Campaign studies'}</h2>
        <span className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground">({String(projects.length).padStart(2, '0')})</span>
      </Reveal>

      <div ref={ref} className="relative" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
        <ul className="divide-y divide-border border-y border-border">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={i * 60}>
              <Link
                to={`/work/${project.slug}`}
                onMouseEnter={() => { if (finePointer) setActive(i) }}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-7 transition-colors duration-500 md:cursor-none md:gap-x-8 md:py-9 lg:grid-cols-[3rem_1fr_1fr_1fr_auto]"
              >
                <span className="text-[11px] tabular-nums tracking-[0.2em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground md:text-[12px]">{String(i + 1).padStart(2, '0')}</span>
                <span className="min-w-0">
                  <span className="block truncate text-xl font-light tracking-[-0.02em] text-foreground transition-transform duration-500 ease-out group-hover:translate-x-3 sm:text-2xl md:text-3xl lg:text-4xl">{project.name}</span>
                  <span className="mt-1 block text-[12px] tracking-[0.08em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground lg:hidden">{text(project.type)} — {project.channels}</span>
                </span>
                <span className="hidden text-[13px] tracking-[0.08em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground lg:block">{text(project.type)}</span>
                <span className="hidden text-[13px] tracking-[0.08em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground lg:block">{project.channels}</span>
                <span className="text-[13px] tabular-nums tracking-[0.08em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground">{project.year}</span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <AnimatePresence>
          {showPreview && (
            <motion.div
              className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <motion.div style={{ rotate }} className="relative aspect-[3/2] w-[26vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                {projects.map((project, i) => (
                  <motion.img
                    key={project.slug}
                    src={project.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={false}
                    animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.15 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {finePointer && !reducedMotion && (
        <motion.div className="pointer-events-none fixed left-0 top-0 z-[300]" style={{ x: cursorSpringX, y: cursorSpringY, opacity: active !== null ? 1 : 0 }} aria-hidden="true">
          <div className="flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ece9e4] mix-blend-difference">
            <span className="text-[10px] uppercase tracking-[0.2em] text-black">View</span>
          </div>
        </motion.div>
      )}
    </section>
  )
}
