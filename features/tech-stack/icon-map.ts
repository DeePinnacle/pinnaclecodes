import type { LucideIcon } from "lucide-react"
import {
  Monitor, Server, Wrench,
  FileCode, Palette, Braces, Code2, Atom, Triangle, Smartphone,
  Wind, Play, Component, ClipboardList, ArrowLeftRight,
  Zap, Network, Database, Link, Layers, ShieldCheck, Lock, RefreshCw,
  GitMerge, GitBranch, Workflow, SquareCode, Globe, Box, Send, Moon,
  SlidersHorizontal, AlignLeft, GitCommit,
  LayoutTemplate, Eye, Gauge, Shapes,
  Box as BoxFallback,
} from "lucide-react"

export const SKILL_ICON_MAP: Record<string, LucideIcon> = {
  Monitor, Server, Wrench,
  FileCode, Palette, Braces, Code2, Atom, Triangle, Smartphone,
  Wind, Play, Component, ClipboardList, ArrowLeftRight,
  Zap, Network, Database, Link, Layers, ShieldCheck, Lock, RefreshCw,
  GitMerge, GitBranch, Workflow, SquareCode, Globe, Box, Send, Moon,
  SlidersHorizontal, AlignLeft, GitCommit,
  LayoutTemplate, Eye, Gauge, Shapes,
}

export function getSkillIcon(name: string): LucideIcon {
  return SKILL_ICON_MAP[name] ?? BoxFallback
}