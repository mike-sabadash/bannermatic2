import { useState } from 'react'

type MotionBannerProps = {
  source: string
  label: string
}

export default function MotionBanner({ source, label }: MotionBannerProps) {
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="relative mx-auto aspect-[240/400] w-full max-w-[240px] overflow-hidden bg-[#0b0d0e]">
      <video
        className="absolute inset-0 h-full w-full object-contain"
        src={source}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={label}
        onCanPlay={() => setIsReady(true)}
      />
      {!isReady && (
        <div
          className="absolute inset-0 grid place-items-center bg-[#0b0d0e]"
          role="status"
          aria-label="Загрузка баннера"
        >
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white" />
        </div>
      )}
    </div>
  )
}
