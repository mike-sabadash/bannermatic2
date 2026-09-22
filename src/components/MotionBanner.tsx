import { useState } from 'react'

type MotionBannerProps = {
  source: string
  poster: string
  label: string
}

export default function MotionBanner({ source, poster, label }: MotionBannerProps) {
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="relative mx-auto aspect-[240/400] w-[240px] max-w-full overflow-hidden bg-[#0b0d0e]">
      <video
        className="absolute inset-0 h-full w-full object-contain"
        src={source}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={label}
        onLoadedData={() => setIsReady(true)}
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
