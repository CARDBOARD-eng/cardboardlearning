import type { LucideIcon } from 'lucide-react'
import {
  Car,
  Cookie,
  Gamepad2,
  Ghost,
  GraduationCap,
  House,
  PenTool,
  Pickaxe,
  Rabbit,
  Shield,
  Siren,
  Skull,
  Star,
  Target,
  Trophy,
  Tv,
  Volleyball,
} from 'lucide-react'

export type Game = {
  id: string
  title: string
  label: string
  url: string
  icon: LucideIcon
}

export const games: Game[] = [
  { id: 'minecraft', title: 'Minecraft Web', label: 'Minecraft', url: 'https://eaglercraft.com', icon: Pickaxe },
  { id: 'roblox', title: 'Roblox App', label: 'Roblox', url: 'https://geometrydash.ee', icon: Gamepad2 },
  { id: 'football-bros', title: 'Football Bros', label: 'Football Bros', url: 'https://github.io', icon: Shield },
  { id: 'basketball-bros', title: 'Basketball Bros', label: 'Basketball Bros', url: 'https://github.io', icon: Volleyball },
  { id: 'baseball-bros', title: 'Baseball Bros', label: 'Baseball Bros', url: 'https://github.io', icon: Target },
  { id: 'basketball-stars', title: 'Basketball Stars', label: 'Basketball Stars', url: 'https://github.io', icon: Star },
  { id: 'retro-bowl-26', title: "Retro Bowl 26'", label: "Retro Bowl 26'", url: 'https://github.io', icon: Gamepad2 },
  { id: 'retro-bowl-college', title: 'Retro Bowl College', label: 'Retro Bowl College', url: 'https://github.io', icon: GraduationCap },
  { id: 'escape-road-1', title: 'Escape Road 1', label: 'Escape Road 1', url: 'https://github.io', icon: Car },
  { id: 'escape-road-chase', title: 'Escape Road: Chase', label: 'Escape Road: Chase', url: 'https://github.io/chase/', icon: Siren },
  { id: 'cookie-clicker', title: 'Cookie Clicker', label: 'Cookie Clicker', url: 'https://orteil.dashnet.org/cookieclicker/', icon: Cookie },
  { id: 'fnaf-1', title: 'FNAF 1', label: 'FNAF 1', url: 'https://archive.org', icon: Ghost },
  { id: 'fnaf-2', title: 'FNAF 2', label: 'FNAF 2', url: 'https://archive.org', icon: Rabbit },
  { id: 'granny', title: 'Granny Horror', label: 'Granny Horror', url: 'https://github.io', icon: Skull },
  { id: 'granny-2', title: 'Granny Chapter 2', label: 'Granny Chapter 2', url: 'https://github.io', icon: House },
  { id: 'bendy', title: 'Bendy Ink Machine', label: 'Bendy', url: 'https://github.io', icon: PenTool },
  { id: 'fortnite-tracker', title: 'Fortnite Tracker', label: 'Fortnite Tracker', url: 'https://fortnitetracker.com', icon: Trophy },
  { id: 'youtube', title: 'YouTube Player', label: 'YouTube', url: 'https://youtube.com', icon: Tv },
]
