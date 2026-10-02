import * as React from 'react'
import { animate, AnimatePresence, motion, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

export type ArcRevealGreeting = { text: string; lang?: string }

export interface ArcRevealHeroProps {
  greetings: ArcRevealGreeting[]
  ready: boolean
  waitingText: string
  greetingHold?: number
  revealDuration?: number
  maxWait?: number
  className?: string
  children: React.ReactNode
}

type Phase = 'intro' | 'reveal' | 'done'

export function ArcRevealHero({
  greetings,
  ready,
  waitingText,
  greetingHold = 650,
  revealDuration = 850,
  maxWait = 10000,
  className,
  children,
}: ArcRevealHeroProps) {
  const reducedMotion = useReducedMotion()
  const [phase, setPhase] = React.useState<Phase>('intro')
  const [index, setIndex] = React.useState(0)
  const [minTimePassed, setMinTimePassed] = React.useState(false)
  const progress = useMotionValue(0)
  const arcPath = useTransform(progress, (p: number) => {
    const edge = 110 - p * 140
    return `M 0 ${edge} Q 50 ${edge + 25} 100 ${edge} L 100 110 L 0 110 Z`
  })

  React.useEffect(() => {
    const minTimer = window.setTimeout(() => setMinTimePassed(true), 700)
    const maxTimer = window.setTimeout(() => setPhase((value) => value === 'intro' ? 'reveal' : value), maxWait)
    return () => { window.clearTimeout(minTimer); window.clearTimeout(maxTimer) }
  }, [maxWait])

  React.useEffect(() => {
    if (phase !== 'intro' || !greetings.length) return
    const timer = window.setTimeout(() => setIndex((value) => (value + 1) % greetings.length), greetingHold)
    return () => window.clearTimeout(timer)
  }, [phase, index, greetingHold, greetings.length])

  React.useEffect(() => {
    if (phase === 'intro' && ready && minTimePassed) setPhase('reveal')
  }, [phase, ready, minTimePassed])

  React.useEffect(() => {
    if (phase !== 'reveal') return
    if (reducedMotion) {
      setPhase('done')
      return
    }
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.85, 0, 0.15, 1],
      onComplete: () => setPhase('done'),
    })
    return () => controls.stop()
  }, [phase, progress, revealDuration, reducedMotion])

  const current = greetings[index % greetings.length]
  return (
    <section className={cn('relative min-h-screen bg-background text-foreground', className)} aria-busy={phase !== 'done'}>
      {children}
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            key="case-preloader"
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-foreground text-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="status"
            aria-live="polite"
          >
            <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
              <span className="text-[11px] font-light uppercase tracking-[0.35em] opacity-50">Bannermatic</span>
              <AnimatePresence mode="wait">
                {phase === 'intro' && current && (
                  <motion.span
                    key={`${index}-${current.text}`}
                    lang={current.lang}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-2xl font-light tracking-[-0.04em] sm:text-3xl"
                  >{current.text}</motion.span>
                )}
              </AnimatePresence>
              <span className="text-[12px] font-light tracking-[0.08em] opacity-55">{waitingText}</span>
            </div>
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <motion.path d={arcPath} style={{ fill: 'hsl(var(--background))' }} />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
