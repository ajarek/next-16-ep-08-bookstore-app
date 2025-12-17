'use client'
import { useCartStore } from '@/store/cartStore'
import { Book } from '@/types/typeBook'

const Library = () => {
    const{items}=useCartStore()
  return (
    <div className='min-h-screen bg-[#F9F4EC] text-[#4A3A30] pb-24 font-sans selection:bg-primary/20'>
        <h1>Library</h1>
        <ul>
            {items.map((item : Book)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
       
        
    </div>
  )
}

export default Library