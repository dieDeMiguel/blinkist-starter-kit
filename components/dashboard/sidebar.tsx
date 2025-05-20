import type React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Home,
  Search,
  BookOpen,
  LayoutGrid,
  Highlighter,
  BarChart2,
  Calendar,
  Gift,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-[176px] bg-white border-r border-gray-200 flex-shrink-0 hidden md:flex flex-col h-screen font-sans">
      <div className="p-4">
        <Image
          src="https://cdn.brandfetch.io/blinkist.com/w/512/h/99/logo?c=1idyyS2Jmw4KgfR-C00"
          alt="Blinkist Logo"
          width={120}
          height={24}
          className="h-8 w-auto"
        />
      </div>

      <nav className="flex-1 overflow-y-auto py-4 font-sans">
        <ul className="space-y-1">
          <NavItem href="/dashboard" icon={<Home className="h-5 w-5" />} label="For You" active />
          <NavItem href="#" icon={<Search className="h-5 w-5" />} label="Explore" />
          <NavItem href="#" icon={<BookOpen className="h-5 w-5" />} label="My Library" />
          <NavItem href="#" icon={<LayoutGrid className="h-5 w-5" />} label="Spaces" />
          <NavItem href="#" icon={<Highlighter className="h-5 w-5" />} label="Highlights" />
          <NavItem href="#" icon={<BarChart2 className="h-5 w-5" />} label="Infographics" badge="NEW" />
          <NavItem href="#" icon={<Calendar className="h-5 w-5" />} label="Live Sessions" badge="NEW" />
          <NavItem href="#" icon={<Gift className="h-5 w-5" />} label="Today's Free Blink" />
        </ul>
      </nav>

      <div className="border-t border-gray-200 py-4 font-sans">
        <ul className="space-y-1">
          <NavItem href="#" icon={<Settings className="h-5 w-5" />} label="Settings" />
          <NavItem href="#" icon={<HelpCircle className="h-5 w-5" />} label="Help & support" />
          <NavItem href="#" icon={<LogOut className="h-5 w-5" />} label="Logout" />
        </ul>
      </div>
    </aside>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
  badge?: string
}

function NavItem({ href, icon, label, active, badge }: NavItemProps) {
  return (
    <li className="relative font-sans">
      {active && <div className="absolute left-0 top-0 w-1 h-full bg-blue-500" />}
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 font-sans ${
          active ? "text-blue-500 font-medium" : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        {icon}
        <span>{label}</span>
        {badge && (
          <span className="ml-auto text-[#F1B14C] bg-[#FDF5E8] text-xs font-medium px-2 py-0.5 rounded font-sans">{badge}</span>
        )}
      </Link>
    </li>
  )
}
