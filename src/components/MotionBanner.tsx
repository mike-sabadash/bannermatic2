import { useEffect, useState } from 'react'

type MotionBannerProps = {
  source: string
  label: string
}

export default function MotionBanner({ source, label }: MotionBannerProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    let objectUrl: string | null = null

    async function loadVideo() {
      try {
        const response = await fetch(source)
        if (!response.ok) throw new Error('Unable to load motion banner')

        const base64 = await response.text()
        const binary = atob(base64.trim())
        const bytes = new Uint8Array(binary.length)

        for (let i = 0; i < binary.length; i += 1) {
          bytes[i] = binary.charCodeAt(i)
        }

        objectUrl = URL.createObjectURL(new Blob([bytes], { type: 'video/mp4' }))
        if (active) setVideoUrl(objectUrl)
      } catch {
        // Keep the neutral frame if the asset cannot be fetched.
      }
    }

    void loadVideo()

    return () => {
      active = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [source])

  return (
    <div className="relative mx-auto aspect-[300/600] w-full max-w-[400px] overflow-hidden bg-[#0b0d0e]">
      {!videoUrl && (
        <div
          className="absolute inset-0 grid place-items-center"
          role="status"
          aria-label="Загрузка баннера"
        >
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white" />
        </div>
      )}
      {videoUrl && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          aria-label={label}
        />
      )}
    </div>
  )
}
