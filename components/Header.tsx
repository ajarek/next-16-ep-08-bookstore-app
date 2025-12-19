import { Book, LogIn, UserRoundPen } from "lucide-react"
import Link from "next/link"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
  return (
    <header className='sticky top-0 w-full max-w-5xl mx-auto z-30 flex items-center justify-between px-5 py-4 bg-background/95 backdrop-blur-sm'>
      <Link href='/' className='flex items-center gap-2.5'>
        <Book className='w-6 h-6 text-primary fill-current' />
        <span className='text-2xl font-serif font-bold tracking-tight text-primary'>
          BOOKNOOK
        </span>
      </Link>
      <div className='flex items-center gap-2.5'>
        <SignedOut>
          <SignInButton>
            <Button size='icon' className='cursor-pointer'>
              <LogIn className='w-5 h-5 ' />
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size='icon' className='cursor-pointer'>
              <UserRoundPen className='w-5 h-5 ' />
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
