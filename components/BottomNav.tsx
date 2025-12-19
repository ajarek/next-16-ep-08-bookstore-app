"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Calendar, Library, User, HomeIcon } from "lucide-react"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

export function BottomNav() {
  const pathname = usePathname()

  const { isSignedIn } = useUser()

  const items = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Shop", icon: ShoppingBag, href: "/shop" },
    { name: "Events", icon: Calendar, href: "/events" },
    { name: "Library", icon: Library, href: "/library" },
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
                  ? "text-[#4A3A30] dark:text-primary"
                  : "text-[#8C705F] hover:text-[#4A3A30] dark:hover:text-primary"
              }`}
            >
              <Icon
                className={`w-6 h-6 ${isActive ? "text-green-500" : ""}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className='text-[10px] font-medium'>{item.name}</span>
            </Link>
          )
        })}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <div
              className={`flex flex-col items-center justify-center  space-y-1 transition-colors duration-200 cursor-pointer hover:text-green-500 `}
            >
              <User className={`w-6 h-6 `} />
              <span className='text-[10px] font-medium'>Profile</span>
            </div>
          </SignInButton>
        )}
      </div>
    </nav>
  )
}
