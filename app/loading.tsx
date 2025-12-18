import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className='w-full min-h-screen  flex flex-col items-center justify-center '>
      <Skeleton className='w-48 h-48 rounded-lg mb-8' />
      <Skeleton className='w-64 h-8 mb-4' />
      <Skeleton className='w-96 h-4 mb-2' />
    </div>
  )
}

export default Loading
