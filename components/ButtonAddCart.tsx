"use client"

import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import type { Book } from "@/types/typeBook"
import { toast } from "sonner"
import { ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"

const ButtonAddCart = ({
  id,
  title,
  author,
  image,
  category,

  price,
}: Book) => {
  const router = useRouter()
  const { addItemToCart, items } = useCartStore()
  return (
    <Button
      onClick={() => {
        if (items.some((i) => i.id === id)) {
          toast("This item is already in your cart")
          router.push("/shop")
          return
        }
        addItemToCart({
          id,
          title,
          author,
          image,
          progress: 0,
          category,
          status: "Reading",
          tag: "New",
          feature: false,
          new: false,
          best: false,
          price,
          quantity: 1,
        })

        toast.success("Product added to cart")
        router.push("/shop")
      }}
      aria-label='Add to cart'
      className='w-8 h-8 rounded-full bg-[#4A3A30] flex items-center justify-center text-[#F9F4EC] hover:bg-[#3E2F28] transition-colors cursor-pointer '
    >
      <ShoppingBag className='w-4 h-4' />
    </Button>
  )
}

export default ButtonAddCart
