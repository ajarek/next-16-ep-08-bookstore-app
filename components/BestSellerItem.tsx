import Image from "next/image"
import { Button } from "./ui/button"
import ButtonAddCart from "./ButtonAddCart"

function BestSellerItem({
  title,
  author,
  price,
  image,
  id,
  category,
}: {
  title: string
  author: string
  price: string
  image: string
  id: string
  category: string
}) {
  return (
    <div className='bg-white p-3 rounded-2xl shadow-sm border flex gap-4'>
      <div className='w-20 aspect-2/3 rounded-lg overflow-hidden shrink-0 shadow-sm '>
        <Image
          src={image}
          alt={title}
          width={80}
          height={120}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex-1 flex flex-col justify-between py-1'>
        <div>
          <h3 className='font-serif font-bold text-[#4A3A30] text-lg leading-tight'>
            {title}
          </h3>
          <p className='text-sm text-[#8C705F]'>{author}</p>
          <div className='flex items-center gap-1 mt-1'></div>
        </div>
        <div className='flex items-center justify-between '>
          <span className='font-bold text-[#4A3A30] text-lg'>{price}</span>

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

export default BestSellerItem
