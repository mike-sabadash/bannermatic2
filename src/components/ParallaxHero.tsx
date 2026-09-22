import { useEffect, useRef } from 'react'

type ParallaxHeroProps = {
  source: string
  alt: string
}

export default function ParallaxHero({ source, alt }: ParallaxHeroProps) {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const image = imageRef.current
    if (!image || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = image.parentElement?.getBoundingClientRect()
      if (!rect || rect.bottom < 0 || rect.top > window.innerHeight) return
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      image.style.transform = `translate3d(0, ${(progress - 0.5) * 14}%, 0) scale(1.16)`
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="aspect-[2048/1042] overflow-hidden">
      <img
        ref={imageRef}
        src={source}
        alt={alt}
        className="block h-full w-full scale-[1.16] object-cover object-[50%_59%] will-change-transform"
      />
    </div>
  )
}
