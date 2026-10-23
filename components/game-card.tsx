import type { Game } from '@/lib/games'

type GameCardProps = {
  game: Game
  onOpen: (game: Game) => void
}

export function GameCard({ game, onOpen }: GameCardProps) {
  const Icon = game.icon
  return (
    <button
      type="button"
      onClick={() => onOpen(game)}
      className="group cursor-pointer rounded-2xl border border-white/[0.06] bg-[rgba(13,13,33,0.65)] p-4 text-center backdrop-blur-[14px] transition-all duration-200 hover:-translate-y-1 hover:border-cyan hover:bg-[rgba(20,20,50,0.8)] hover:shadow-[0_10px_25px_rgba(0,210,255,0.2)] focus-visible:-translate-y-1 focus-visible:border-cyan focus-visible:outline-none"
    >
      <span className="mb-3 flex h-[100px] w-full items-center justify-center rounded-xl border border-white/[0.03] bg-gradient-to-br from-[#09091e] to-[#141432]">
        <Icon
          className="size-10 text-[#7a8aa8] transition-colors duration-200 group-hover:text-cyan"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>
      <span className="block truncate text-[0.95rem] font-semibold text-white">{game.label}</span>
    </button>
  )
}
