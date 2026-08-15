'use client'
import { useEffect, useRef, useState } from 'react'
import { truncateWords } from '@/lib/utils'

const MAX_BIO_WORDS = 150

interface TeamBioProps {
    bio: string
}

export function TeamBio({ bio }: TeamBioProps) {
    const [expanded, setExpanded] = useState(false)
    const [isTruncated, setIsTruncated] = useState(false)
    const textRef = useRef<HTMLParagraphElement>(null)
    const clampedBio = truncateWords(bio, MAX_BIO_WORDS)

    useEffect(() => {
        const el = textRef.current
        if (el) setIsTruncated(el.scrollHeight > el.clientHeight + 1)
    }, [clampedBio])

    return (
        <div>
            <p ref={textRef} className={expanded ? '' : 'line-clamp-3'}>
                {clampedBio}
            </p>
            {isTruncated && (
                <button
                    type="button"
                    onClick={() => setExpanded((prev) => !prev)}
                    className="mt-1 text-[11px] font-semibold text-[#04243b] underline underline-offset-2 hover:text-slate-950"
                >
                    {expanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    )
}
