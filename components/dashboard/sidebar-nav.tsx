"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  Home,
  Search,
  BookmarkIcon,
  LayoutGrid,
  PenLine,
  BarChart2,
  Calendar,
  Gift,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[240px] bg-[#F9F9FB] border-r border-gray-200 flex-shrink-0 hidden md:flex flex-col h-screen font-sans">
      <div className="p-6 flex items-center">
        <Image
          src="https://cdn.brandfetch.io/blinkist.com/w/512/h/99/logo?c=1idyyS2Jmw4KgfR-C00"
          alt="Blinkist Logo"
          width={100}
          height={35}
          className="h-6 w-auto"
        />
      </div>

      <nav className="flex-1 overflow-y-auto py-4 font-sans">
        <ul className="space-y-1">
          <NavItem
            href="/dashboard"
            icon={<Home className="h-6 w-6" />}
            label="For You"
            active={pathname === "/dashboard"}
          />
          <NavItem href="#" icon={<Search className="h-6 w-6" />} label="Explore" />
          <NavItem href="#" icon={<BookmarkIcon className="h-6 w-6" />} label="My Library" />
          <NavItem href="#" icon={<LayoutGrid className="h-6 w-6" />} label="Spaces" />
          <NavItem href="#" icon={<PenLine className="h-6 w-6" />} label="Highlights" />
          <NavItem href="#" icon={<BarChart2 className="h-6 w-6" />} label="Infographics" badge="NEW" />
          <NavItem href="#" icon={<Calendar className="h-6 w-6" />} label="Live Sessions" badge="NEW" />
          <NavItem href="#" icon={<Gift className="h-6 w-6" />} label="Today's Free Blink" />
        </ul>

        {/* Moved the bottom navigation right after the main navigation with just a separator */}
        <div className="border-t border-gray-200 mt-4 pt-4 font-sans">
          <ul className="space-y-1">
            <NavItem href="#" icon={<Settings className="h-6 w-6" />} label="Settings" />
            <NavItem href="#" icon={<HelpCircle className="h-6 w-6" />} label="Help & support" />
            <NavItem href="#" icon={<LogOut className="h-6 w-6" />} label="Logout" />
          </ul>
        </div>
      </nav>
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
        className={`flex items-center gap-4 px-6 py-3 font-sans ${
          active ? "text-blue-500 font-medium" : "text-[#0E2B3D] hover:bg-gray-50"
        }`}
      >
        {icon}
        <span className="text-[14px]">{label}</span>
        {badge && (
          <span className="ml-auto text-[#F1B14C] bg-[#FDF5E8] text-xs font-medium px-2 py-0.5 rounded font-sans">{badge}</span>
        )}
      </Link>
    </li>
  )
}
