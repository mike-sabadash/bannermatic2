import { useCallback, useEffect, useRef, useState } from 'react'

type MotionBannerProps = {
  source: string
  poster: string
  label: string
}

export default function MotionBanner({ source, poster, label }: MotionBannerProps) {
  const [isReady, setIsReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const ensurePlayback = useCallback(() => {
    const video = videoRef.current
    if (!video || document.hidden || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return
    if (video.ended) video.currentTime = 0
    if (video.paused) void video.play().catch(() => undefined)
  }, [])

  useEffect(() => {
    const retry = window.setInterval(ensurePlayback, 1200)
    document.addEventListener('visibilitychange', ensurePlayback)
    return () => {
      window.clearInterval(retry)
      document.removeEventListener('visibilitychange', ensurePlayback)
    }
  }, [ensurePlayback])

  return (
    <div className="relative mx-auto aspect-[240/400] w-[240px] max-w-full overflow-hidden bg-[#0b0d0e]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain"
        src={source}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={label}
        onLoadedData={() => {
          setIsReady(true)
          ensurePlayback()
        }}
        onCanPlay={ensurePlayback}
        onPause={ensurePlayback}
        onEnded={ensurePlayback}
        onStalled={ensurePlayback}
        onError={() => setIsReady(true)}
      />
      {!isReady && (
        <div
          className="absolute inset-0 grid place-items-center bg-[#0b0d0e]/70"
          role="status"
          aria-label="Загрузка баннера"
        >
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white" />
        </div>
      )}
    </div>
  )
}
