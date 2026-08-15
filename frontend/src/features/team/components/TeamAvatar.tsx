'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface TeamAvatarProps {
  imageUrl?: string
  imageAlt: string
  className?: string
}

export function TeamAvatar({ imageUrl, imageAlt, className }: TeamAvatarProps) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !imageUrl || failed

  return (
    <div
      className={cn(
        'flex h-30 w-30 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#b0b0b0]',
        className
      )}
    >
      {showPlaceholder ? (
        <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label={imageAlt}>
          <circle cx="50" cy="38" r="17" fill="white" fillOpacity="0.85" />
          <ellipse cx="50" cy="92" rx="32" ry="28" fill="white" fillOpacity="0.7" />
        </svg>
      ) : (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
