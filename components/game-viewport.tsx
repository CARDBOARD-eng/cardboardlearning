'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Maximize, RotateCw, X } from 'lucide-react'
import type { Game } from '@/lib/games'

type GameViewportProps = {
  game: Game
  onClose: () => void
}

export function GameViewport({ game, onClose }: GameViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !document.fullscreenElement) onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const goFullscreen = () => {
    containerRef.current?.requestFullscreen?.().catch(() => {})
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={game.title}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#010105]"
    >
      <div className="mb-4 flex w-[96%] max-w-[1400px] items-center justify-between gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-white">{game.title}</h2>
          <p className="truncate text-xs text-[#7a8aa8]">{game.url}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <IconButton label="Reload" onClick={() => setReloadKey((k) => k + 1)}>
            <RotateCw className="size-4" aria-hidden="true" />
          </IconButton>
          <IconButton label="Fullscreen" onClick={goFullscreen}>
            <Maximize className="size-4" aria-hidden="true" />
          </IconButton>
          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in new tab"
            title="Open in new tab"
            className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-cyan hover:text-cyan"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg bg-[#ff4757] px-5 py-2.5 font-bold text-white transition-opacity hover:opacity-90"
          >
            <X className="size-4" aria-hidden="true" />
            Exit
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="h-[84vh] w-[96%] max-w-[1400px] overflow-hidden rounded-[18px] border border-cyan/30 bg-black"
      >
        <iframe
          key={reloadKey}
          src={game.url}
          title={game.title}
          className="size-full border-none"
          allow="fullscreen; autoplay; gamepad; pointer-lock"
          allowFullScreen
        />
      </div>
    </div>
  )
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-cyan hover:text-cyan"
    >
      {children}
    </button>
  )
}
