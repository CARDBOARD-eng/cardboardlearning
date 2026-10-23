import type { Game } from '@/lib/games'

type SidebarPanelProps = {
  totalGames: number
  recent: Game[]
  onOpen: (game: Game) => void
}

export function SidebarPanel({ totalGames, recent, onOpen }: SidebarPanelProps) {
  return (
    <aside className="flex h-full flex-col gap-5 overflow-y-auto border-l border-white/5 bg-[rgba(6,6,20,0.8)] p-6">
      <Widget title="Library">
        <p>
          <span className="text-2xl font-bold text-white">{totalGames}</span> titles loaded and ready to launch.
        </p>
      </Widget>

      <Widget title="Recently Played">
        {recent.length === 0 ? (
          <p>Nothing yet. Pick a card to get started.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {recent.map((game) => {
              const Icon = game.icon
              return (
                <li key={game.id}>
                  <button
                    type="button"
                    onClick={() => onOpen(game)}
                    className="flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left text-sm text-[#c8d3e6] transition-colors hover:bg-white/5 hover:text-cyan"
                  >
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    <span className="truncate">{game.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </Widget>

      <Widget title="Controls">
        <ul className="flex flex-col gap-1.5">
          <li>
            <Kbd>/</Kbd> Focus search
          </li>
          <li>
            <Kbd>Esc</Kbd> Exit the game viewport
          </li>
        </ul>
      </Widget>

      <Widget title="Heads Up">
        <p>
          Some sites refuse to load inside an embedded frame. If a game shows a blank screen, use the open-in-new-tab
          button in the viewport bar.
        </p>
      </Widget>
    </aside>
  )
}

function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[14px] border border-white/[0.04] bg-white/[0.02] p-[18px]">
      <h4 className="mb-2.5 text-[0.95rem] font-semibold uppercase text-violet">{title}</h4>
      <div className="text-[0.85rem] leading-relaxed text-[#8395a7]">{children}</div>
    </section>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="mr-2 inline-flex min-w-7 items-center justify-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-xs text-white">
      {children}
    </kbd>
  )
}
