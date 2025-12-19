import Image from "next/image"
import ButtonAddCart from "./ButtonAddCart"

export function FeaturedCard({
  id,
  title,
  author,
  price,
  image,
  category,
}: {
  id: string
  title: string
  author: string
  price: string
  image: string
  category: string
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
        <h3 className='font-serif font-bold text-[#4A3A30] dark:text-primary leading-tight line-clamp-1'>
          {title}
        </h3>
        <p className='text-xs text-[#8C705F] dark:text-primary'>{author}</p>
        <div className='flex items-center justify-between mt-2'>
          <span className='font-bold text-[#4A3A30] dark:text-primary text-sm'>
            {price}
          </span>
          <ButtonAddCart
            id={+id}
            title={title}
            author={author}
            image={image}
            category={category}
            price={+price}
          />
        </div>
      </div>
    </div>
  )
}
