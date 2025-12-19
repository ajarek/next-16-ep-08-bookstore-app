import Image from "next/image"

const PickupCard = ({
  title,
  author,
  status,
  tag,
  image,
}: {
  title: string
  author: string
  status: string
  tag: string
  image: string
}) => {
  return (
    <div className='bg-white p-4 rounded-2xl shadow-sm border border-[#F0EAE0] flex gap-4 items-center'>
      <div className='relative w-12 h-16 rounded shadow-md overflow-hidden shrink-0'>
        <Image
          src={image}
          alt={title}
          fill
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex justify-between items-start'>
          <div>
            <h4 className='font-serif text-[#4A3A30] dark:text-primary font-medium text-lg leading-tight'>
              {title}
            </h4>
            <p className='text-sm text-[#8C705F] dark:text-primary mt-0.5'>
              {author}
            </p>
          </div>
          <span className='text-[10px] font-bold text-[#9C1F38] bg-[#9C1F38]/10 px-2 py-1 rounded-sm tracking-wider uppercase'>
            {tag}
          </span>
        </div>
        <div className='mt-3 flex items-center gap-1.5 text-xs font-medium text-[#2E7D32]'>
          <div className='w-1.5 h-1.5 rounded-full bg-[#2E7D32]' />
          <span>{status}</span>
        </div>
      </div>
    </div>
  )
}

export default PickupCard
