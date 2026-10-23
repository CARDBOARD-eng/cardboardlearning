import type { LucideIcon } from 'lucide-react'
import {
  Bird,
  Bomb,
  Car,
  CarFront,
  Circle,
  Crosshair,
  Flame,
  FlaskConical,
  Footprints,
  Ghost,
  Grid3x3,
  Hexagon,
  Keyboard,
  LayoutGrid,
  Medal,
  Paperclip,
  PenTool,
  Pickaxe,
  Skull,
  Sparkles,
  Target,
  Trophy,
  Type,
  Volleyball,
  Waves,
  Zap,
} from 'lucide-react'

export type Game = {
  id: string
  title: string
  label: string
  url: string
  icon: LucideIcon
}

export const games: Game[] = [
  { id: 'minecraft', title: 'Minecraft Classic', label: 'Minecraft', url: 'https://classic.minecraft.net/', icon: Pickaxe },
  { id: 'football-bros', title: 'Football Bros', label: 'Football Bros', url: 'https://gg.footballbros.me/games/football-bros/index.html', icon: Trophy },
  { id: 'basket-bros', title: 'Basket Bros', label: 'Basket Bros', url: 'https://crispyclean.org/index.php?game=bbros', icon: Medal },
  { id: 'baseball-bros', title: 'Baseball Bros', label: 'Baseball Bros', url: 'https://bbb.basketballing.org/', icon: Volleyball },
  { id: 'retro-bowl', title: 'Retro Bowl', label: 'Retro Bowl', url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html', icon: Trophy },
  { id: 'retro-bowl-college', title: 'Retro Bowl College', label: 'Retro Bowl College', url: 'https://gg.footballbros.me/games/retro-bowl-college/index.html', icon: Trophy },
  { id: 'escape-road', title: 'Escape Road', label: 'Escape Road', url: 'https://escaperoad.io/escape-road.embed', icon: CarFront },
  { id: 'escape-road-2', title: 'Escape Road 2', label: 'Escape Road 2', url: 'https://escaperoad.io/escape-road-2.embed', icon: CarFront },
  { id: 'fnaf', title: "Five Nights at Freddy's", label: 'FNAF', url: 'https://fnafgame.io/fnaf-game.embed', icon: Ghost },
  { id: 'fnaf-2', title: "Five Nights at Freddy's 2", label: 'FNAF 2', url: 'https://fnafgame.io/fnaf-2.embed', icon: Ghost },
  { id: 'granny', title: 'Granny', label: 'Granny', url: 'https://grannyonline.io/granny.embed', icon: Skull },
  { id: 'granny-2', title: 'Granny 2', label: 'Granny 2', url: 'https://grannyonline.io/granny-2.embed', icon: Skull },
  { id: 'slither', title: 'Slither.io', label: 'Slither.io', url: 'https://slither.io/', icon: Waves },
  { id: 'diep', title: 'Diep.io', label: 'Diep.io', url: 'https://diep.io/', icon: Circle },
  { id: 'shell-shockers', title: 'Shell Shockers', label: 'Shell Shockers', url: 'https://shellshock.io/', icon: Crosshair },
  { id: 'smash-karts', title: 'Smash Karts', label: 'Smash Karts', url: 'https://smashkarts.io/', icon: Car },
  { id: 'bonk', title: 'Bonk.io', label: 'Bonk.io', url: 'https://bonk.io/', icon: Target },
  { id: 'powerline', title: 'Powerline.io', label: 'Powerline.io', url: 'https://powerline.io/', icon: Zap },
  { id: '2048', title: '2048', label: '2048', url: 'https://2048game.com/', icon: Grid3x3 },
  { id: 'hextris', title: 'Hextris', label: 'Hextris', url: 'https://hextris.github.io/hextris/', icon: Hexagon },
  { id: 'clumsy-bird', title: 'Clumsy Bird', label: 'Clumsy Bird', url: 'https://ellisonleao.github.io/clumsy-bird/', icon: Bird },
  { id: 'chrome-dino', title: 'Chrome Dino', label: 'Chrome Dino', url: 'https://chromedino.com/', icon: Footprints },
  { id: 'ztype', title: 'ZType', label: 'ZType', url: 'https://zty.pe/', icon: Keyboard },
  { id: 'line-rider', title: 'Line Rider', label: 'Line Rider', url: 'https://www.linerider.com/', icon: PenTool },
  { id: 'sandspiel', title: 'Sandspiel', label: 'Sandspiel', url: 'https://sandspiel.club/', icon: Sparkles },
  { id: 'little-alchemy', title: 'Little Alchemy 2', label: 'Little Alchemy 2', url: 'https://littlealchemy2.com/', icon: FlaskConical },
  { id: 'a-dark-room', title: 'A Dark Room', label: 'A Dark Room', url: 'https://adarkroom.doublespeakgames.com/', icon: Flame },
  { id: 'paperclips', title: 'Universal Paperclips', label: 'Paperclips', url: 'https://www.decisionproblem.com/paperclips/index2.html', icon: Paperclip },
  { id: 'minesweeper', title: 'Minesweeper Online', label: 'Minesweeper', url: 'https://www.minesweeper.online/', icon: Bomb },
  { id: 'mahjong', title: 'Mahjong Solitaire', label: 'Mahjong', url: 'https://www.mahjong-solitaire.app/', icon: LayoutGrid },
  { id: 'wordle', title: 'Wordle Unlimited', label: 'Wordle', url: 'https://wordlegame.org/', icon: Type },
]
