import Image from "next/image";

export function CategoryCard({ title, image, onClick }: { title: string; image: string; onClick: () => void }) {
  return (
    <div className='relative h-24 rounded-2xl overflow-hidden shadow-sm group cursor-pointer' onClick={() => onClick()}>
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={image}
          alt={title}
          fill
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
      </div>
      <div className='absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-white font-serif font-bold tracking-wide text-lg drop-shadow-md'>
          {title}
        </span>
      </div>
    </div>
  )
}
