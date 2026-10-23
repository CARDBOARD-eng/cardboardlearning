'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Search } from 'lucide-react'
import { games, type Game } from '@/lib/games'
import { GameCard } from './game-card'
import { GameViewport } from './game-viewport'
import { SidebarPanel } from './sidebar-panel'

export function CardboardPortal() {
  const [activeGame, setActiveGame] = useState<Game | null>(null)
  const [recent, setRecent] = useState<Game[]>([])
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  const filteredGames = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return games
    return games.filter((g) => g.label.toLowerCase().includes(q) || g.title.toLowerCase().includes(q))
  }, [query])

  const openGame = useCallback((game: Game) => {
    setActiveGame(game)
    setRecent((prev) => [game, ...prev.filter((g) => g.id !== game.id)].slice(0, 5))
  }, [])

  const closeGame = useCallback(() => setActiveGame(null), [])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === '/' && document.activeElement !== searchRef.current && !activeGame) {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeGame])

  return (
    <>
      <div className="workspace-bg fixed inset-0 z-[1]" aria-hidden="true" />

      <div className="relative z-[2] grid h-dvh w-full grid-cols-1 overflow-hidden lg:grid-cols-[1fr_300px]">
        <main className="flex h-full flex-col overflow-y-auto p-6">
          <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="border-l-4 border-cyan pl-4">
              <h1 className="bg-gradient-to-tr from-cyan to-violet bg-clip-text text-4xl font-black uppercase text-transparent sm:text-[2.8rem]">
                Cardboard
              </h1>
              <p className="mt-1 text-[0.95rem] text-[#7a8aa8]">Same-tab unblocked node client array</p>
            </div>

            <label className="relative block w-full sm:w-72">
              <span className="sr-only">Search games</span>
              <Search
                className="pointer-events-none absolute left-3 z-10 top-1/2 size-4 -translate-y-1/2 text-[#7a8aa8]"
                aria-hidden="true"
              />
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games..."
                className="w-full rounded-xl border border-white/[0.06] bg-[rgba(13,13,33,0.65)] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-[#7a8aa8] backdrop-blur-[14px] focus:border-cyan focus:outline-none"
              />
            </label>
          </header>

          {filteredGames.length === 0 ? (
            <p className="text-[#7a8aa8]">No games match &quot;{query}&quot;.</p>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-5 pb-10">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} onOpen={openGame} />
              ))}
            </div>
          )}
        </main>

        <div className="hidden lg:block">
          <SidebarPanel totalGames={games.length} recent={recent} onOpen={openGame} />
        </div>
      </div>

      {activeGame && <GameViewport game={activeGame} onClose={closeGame} />}
    </>
  )
}
