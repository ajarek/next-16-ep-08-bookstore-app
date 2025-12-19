import Image from "next/image"

const ReadingCard = ({
  title,
  progress,
  image,
}: {
  title: string
  progress: number
  image: string
}) => {
  return (
    <div className='flex-none w-[140px] snap-start flex flex-col gap-4 group'>
      <div className='aspect-2/3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative'>
        <Image
          src={image}
          alt={title}
          fill
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>
      <div className='space-y-2 px-1'>
        <h4 className='text-sm font-serif font-medium text-[#4A3A30] dark:text-primary line-clamp-1'>
          {title}
        </h4>
        <div className='space-y-1'>
          <div className='h-1.5 w-full bg-[#E6DCC8] rounded-full overflow-hidden'>
            <div
              className='h-full bg-[#2E7D32] rounded-full'
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className='text-[10px] text-[#8C705F] font-medium'>
            {progress}% Complete
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReadingCard
