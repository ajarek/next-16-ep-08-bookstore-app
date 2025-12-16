import { Book } from "lucide-react"
import NextImage from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className='sticky top-0 w-full max-w-5xl mx-auto z-30 flex items-center justify-between px-5 py-4 bg-background/95 backdrop-blur-sm'>
      <Link href='/' className='flex items-center gap-2.5'>
        <Book className='w-6 h-6 text-primary fill-current' />
        <span className='text-2xl font-serif font-bold tracking-tight text-primary'>
          BOOKNOOK
        </span>
      </Link>
      <div className='relative w-10 h-10 rounded-full border-2  shadow-sm overflow-hidden'>
        <NextImage
          src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
          alt='User Avatar'
          fill
          className='w-full h-full object-cover'
        />
      </div>
    </header>
  )
}

export default Header
