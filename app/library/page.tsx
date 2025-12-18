"use client"


import Greeting from "@/components/Greeting"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cartStore"
import { Book } from "@/types/typeBook"
import Image from "next/image"

const Library = () => {
  const { items, removeItemFromCart } = useCartStore()
  if (items.length === 0) {
    return (
      <div className='min-h-screen w-full max-w-5xl mx-auto px-5 pb-24 font-sans selection:bg-primary/20 space-y-8 pt-8'>
        <Greeting label="You are in your library," />
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
          <p className='text-center text-2xl font-bold text-[#4A3A30]'>No items in library</p>
        </div>
      </div>
    )
  }
  return (
    <div className='min-h-screen w-full max-w-5xl mx-auto px-5 pb-24 font-sans selection:bg-primary/20 space-y-8 pt-8'>
      <Greeting label="You are in your library," />
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
        {items.map((item: Book) => (
          <div
            key={item.id}
            className='flex-none w-[160px] snap-start flex flex-col gap-3 group'
          >
            <div className='aspect-2/3 rounded-xl shadow-md overflow-hidden relative'>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='space-y-1'>
              <h3 className='font-serif font-bold text-[#4A3A30] leading-tight line-clamp-1'>
                {item.title}
              </h3>
              <p className='text-xs text-[#8C705F]'>{item.author}</p>
              <div className='space-y-1'>
          <div className='h-1.5 w-full bg-[#E6DCC8] rounded-full overflow-hidden'>
            <div
              className='h-full bg-[#2E7D32] rounded-full'
              style={{ width: `${item.progress}%` }}
            />
          </div>
          <p className='text-[10px] text-[#8C705F] font-medium'>
            {item.progress}% Complete
          </p>
        </div>
            </div>
            <Button variant='destructive' disabled={items.length === 0} onClick={() => removeItemFromCart(item.id.toString())} className="cursor-pointer">Delete</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library
