import { useState } from 'react'

type LoadableImageProps = {
  src: string
  alt: string
  className: string
  containerClassName?: string
  eager?: boolean
}

export default function LoadableImage({
  src,
  alt,
  className,
  containerClassName = '',
  eager = false,
}: LoadableImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`image-loader relative overflow-hidden ${containerClassName}`}>
      {!loaded && <span className="image-loader__skeleton absolute inset-0" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}
