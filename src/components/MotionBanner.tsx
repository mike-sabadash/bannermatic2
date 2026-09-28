import { useCallback, useEffect, useRef, useState } from 'react'
import { usePreferences } from '../lib/preferences'

type MotionBannerProps = {
  source: string
  poster: string
  label: string
  onReady?: () => void
}

export default function MotionBanner({ source, poster, label, onReady }: MotionBannerProps) {
  const { language } = usePreferences()
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)
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
          ensurePlayback()
        }}
        onPlaying={() => { setIsReady(true); setHasError(false); onReady?.() }}
        onCanPlay={ensurePlayback}
        onWaiting={() => setIsReady(false)}
        onPause={ensurePlayback}
        onEnded={ensurePlayback}
        onStalled={() => { setIsReady(false); ensurePlayback() }}
        onError={() => { setIsReady(true); setHasError(true); onReady?.() }}
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
      {hasError && (
        <div className="absolute inset-0 grid place-items-center bg-[#0b0d0e]/85 p-5 text-center text-sm text-white">
          <button type="button" onClick={() => { setHasError(false); setIsReady(false); videoRef.current?.load(); ensurePlayback() }} className="border-b border-white/70 pb-1">
            {language === 'ru' ? 'Повторить загрузку видео' : 'Retry video'}
          </button>
        </div>
      )}
    </div>
  )
}
