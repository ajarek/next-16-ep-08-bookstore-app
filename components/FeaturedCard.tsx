import { ShoppingBag } from "lucide-react"
import Image from "next/image"

export function FeaturedCard({
  title,
  author,
  price,
  image,
}: {
  title: string
  author: string
  price: string
  image: string
}) {
  return (
    <div className='flex-none w-[160px] snap-start flex flex-col gap-3 group'>
      <div className='aspect-2/3 rounded-xl shadow-md overflow-hidden relative'>
        <Image
          src={image}
          alt={title}
          fill
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>
      <div className='space-y-1'>
        <h3 className='font-serif font-bold text-[#4A3A30] leading-tight line-clamp-1'>
          {title}
        </h3>
        <p className='text-xs text-[#8C705F]'>{author}</p>
        <div className='flex items-center justify-between mt-2'>
          <span className='font-bold text-[#4A3A30] text-sm'>{price}</span>
          <button className='w-8 h-8 rounded-full bg-[#4A3A30] flex items-center justify-center text-[#F9F4EC] hover:bg-[#3E2F28] transition-colors cursor-pointer'>
            <ShoppingBag className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}