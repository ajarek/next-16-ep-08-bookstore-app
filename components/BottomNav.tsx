"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass, ShoppingBag, Calendar, Library, User } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()

  const items = [
    { name: "Discover", icon: Compass, href: "/discover" },
    { name: "Shop", icon: ShoppingBag, href: "/shop" },
    { name: "Events", icon: Calendar, href: "/events" },
    { name: "Library", icon: Library, href: "/" },
    { name: "Account", icon: User, href: "/account" },
  ]

  return (
    <nav className='fixed bottom-0 left-0 right-0 border-t border-[#E6DCC8] bg-[#F9F4EC]/95 backdrop-blur-md pb-safe z-50'>
      <div className='flex justify-around items-center h-16 max-w-md mx-auto px-2'>
        {items.map((item) => {
          const Icon = item.icon
          // Active state logic:
          // - Library (/) is active only on root
          // - Others are active if pathname starts with their href (except / which is root)
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
                isActive
                  ? "text-[#4A3A30]"
                  : "text-[#8C705F] hover:text-[#4A3A30]"
              }`}
            >
              <Icon
                className={`w-6 h-6 ${isActive ? "fill-current" : ""}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className='text-[10px] font-medium'>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
