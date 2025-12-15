"use client"

import * as React from "react"
import {
  Search,
  Bell,
  ShoppingBag,
  Filter,
  Star,
  Truck,
  Crown,
} from "lucide-react"
import { BottomNav } from "@/components/BottomNav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Shop() {
  return (
    <div className='min-h-screen bg-[#F9F4EC] text-[#4A3A30] pb-24 font-sans selection:bg-primary/20'>
      {/* Header */}
      <header className='sticky top-0 z-30 bg-[#F9F4EC]/95 backdrop-blur-sm px-5 py-2'>
        <div className='flex items-center justify-between py-2'>
          <div className='w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
              alt='User Avatar'
              className='w-full h-full object-cover'
            />
          </div>
          <span className='text-2xl font-serif font-bold tracking-tight text-[#4A3A30]'>
            BOOKNOOK
          </span>
          <Button variant='ghost' size='icon' className='text-[#4A3A30]'>
            <Bell className='w-6 h-6' />
          </Button>
        </div>

        <div className='mt-2 space-y-4'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-serif text-[#8C705F]'>
              Good evening, Alex
            </h1>
          </div>

          <div className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C705F]' />
            <Input
              placeholder='Find your next great read...'
              className='pl-10 bg-white/50 border-none shadow-sm placeholder:text-[#8C705F]/60 text-[#4A3A30] h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-[#8C705F]'
            />
          </div>

          <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5'>
            <CategoryPill label='All Books' active />
            <CategoryPill label='Fiction' />
            <CategoryPill label='Non-Fiction' />
            <CategoryPill label='Sci-Fi' />
            <CategoryPill label='History' />
          </div>
        </div>
      </header>

      <main className='container max-w-md mx-auto px-5 space-y-8 pt-2'>
        {/* Staff Picks Banner */}
        <div className='relative overflow-hidden rounded-[2rem] h-48 shadow-lg group'>
          <div className='absolute inset-0 bg-gradient-to-r from-[#3E2F28] to-[#5D463C]' />
          {/* Decorative sheen */}
          <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50' />

          <div className='absolute inset-0 p-6 flex flex-col justify-center items-start z-10'>
            <div className='flex items-center gap-1.5 text-[#F3EFE6] mb-2'>
              <Star className='w-3 h-3 fill-[#F3EFE6]' />
              <span className='text-[10px] uppercase tracking-widest font-bold opacity-90'>
                Staff Picks
              </span>
            </div>
            <h2 className='text-3xl font-serif text-[#F3EFE6] leading-tight mb-4'>
              Books of the <br /> Month
            </h2>
            <span className='inline-block bg-[#F3EFE6] text-[#3E2F28] text-xs font-bold px-3 py-1.5 rounded-full'>
              20% OFF
            </span>
          </div>

          {/* Abstract book spines effect on right */}
          <div className='absolute right-0 top-0 bottom-0 w-1/3 flex gap-1 opacity-20 transform skew-x-[-10deg]'>
            <div className='w-4 bg-white/30 h-full' />
            <div className='w-6 bg-white/20 h-full' />
            <div className='w-3 bg-white/40 h-full' />
            <div className='w-8 bg-white/10 h-full' />
          </div>
        </div>

        {/* Featured Books */}
        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-serif font-bold text-[#4A3A30]'>
              Featured Books
            </h2>
            <Button
              variant='ghost'
              size='sm'
              className='text-[#8C705F] hover:text-[#7A6050] hover:bg-transparent text-xs uppercase tracking-wide font-bold px-0'
            >
              View All
            </Button>
          </div>
          <div className='flex gap-4 overflow-x-auto pb-6 -mx-5 px-5 scrollbar-hide snap-x'>
            <FeaturedCard
              title='The Midnight Library'
              author='Matt Haig'
              price='$24.99'
              image='https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop'
            />
            <FeaturedCard
              title='Klara and the Sun'
              author='Kazuo Ishiguro'
              price='$23.50'
              image='https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop'
            />
            <FeaturedCard
              title='Project Hail Mary'
              author='Andy Weir'
              price='$26.00'
              image='https://images.unsplash.com/photo-1614726365723-49cfa175b2eb?q=80&w=400&auto=format&fit=crop'
            />
          </div>
        </section>

        {/* Browse by Category */}
        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-serif font-bold text-[#4A3A30]'>
              Browse by Category
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <CategoryCard
              title='Fiction'
              image='https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=400&auto=format&fit=crop'
            />
            <CategoryCard
              title='Non-Fiction'
              image='https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=400&auto=format&fit=crop'
            />
            <CategoryCard
              title='Poetry'
              image='https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&w=400&auto=format&fit=crop'
            />
            <CategoryCard
              title='Biography'
              image='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&auto=format&fit=crop'
            />
          </div>
        </section>

        {/* Fresh from the Press Banner */}
        <div className='bg-[#4E8B41] rounded-[2rem] p-6 relative overflow-hidden shadow-md'>
          <div className='relative z-10 space-y-1'>
            <h3 className='text-xl font-serif text-white font-bold'>
              Fresh from the Press
            </h3>
            <p className='text-white/80 text-sm pb-4'>
              Discover the latest stories
            </p>
            <Button className='bg-[#F3EFE6] text-[#4E8B41] hover:bg-white rounded-full px-6 text-xs font-bold shadow-sm h-8'>
              Check it out
            </Button>
          </div>
          <div className='absolute -bottom-6 -right-6 opacity-20'>
            <div className='w-32 h-32 border-4 border-white rounded-lg transform rotate-12' />
          </div>
        </div>

        {/* New Arrivals */}
        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-serif font-bold text-[#4A3A30]'>
              New Arrivals
            </h2>
          </div>
          <div className='flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide snap-x'>
            <NewArrivalCard
              title='Beautiful World'
              author='Sally Rooney'
              price='$18.00'
              image='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=300&auto=format&fit=crop'
            />
            <NewArrivalCard
              title='Cloud Cuckoo Land'
              author='Anthony Doerr'
              price='$30.00'
              image='https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=300&auto=format&fit=crop'
            />
            <NewArrivalCard
              title='Matrix'
              author='Lauren Groff'
              price='$27.00'
              image='https://images.unsplash.com/photo-1518373714866-3f14797e09a3?q=80&w=300&auto=format&fit=crop'
            />
          </div>
        </section>

        {/* Best Sellers */}
        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-serif font-bold text-[#4A3A30]'>
              Best Sellers
            </h2>
            <Button
              variant='ghost'
              size='icon'
              className='bg-[#4A3A30] text-[#F9F4EC] hover:bg-[#3E2F28] w-8 h-8 rounded-lg'
            >
              <Filter className='w-4 h-4' />
            </Button>
          </div>

          <div className='space-y-3'>
            <BestSellerItem
              title='The Song of Achilles'
              author='Madeline Miller'
              price='$16.99'
              rating={4.8}
              reviews={2348}
              image='https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=300&auto=format&fit=crop'
            />
            <BestSellerItem
              title='Atomic Habits'
              author='James Clear'
              price='$21.99'
              rating={4.9}
              reviews={5892}
              image='https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=300&auto=format&fit=crop' // Recycling image for placeholder
            />
            <BestSellerItem
              title='Dune'
              author='Frank Herbert'
              price='$18.00'
              rating={4.7}
              reviews={3421}
              image='https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=300&auto=format&fit=crop'
            />
          </div>
        </section>

        {/* Info Banners */}
        <div className='space-y-3'>
          <div className='bg-[#F3EFE6] rounded-2xl p-4 flex items-center gap-4 border border-[#E6DCC8]'>
            <div className='w-10 h-10 rounded-full bg-[#4A3A30] flex items-center justify-center shrink-0'>
              <Truck className='w-5 h-5 text-[#F3EFE6]' />
            </div>
            <div>
              <h4 className='font-serif font-bold text-[#4A3A30]'>
                Free Shipping
              </h4>
              <p className='text-xs text-[#8C705F]'>On orders over $50.00</p>
            </div>
          </div>

          <div className='bg-[#3E2F28] rounded-2xl p-4 flex items-center justify-between border border-[#3E2F28]'>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 rounded-full bg-[#F3EFE6] flex items-center justify-center shrink-0'>
                <Crown className='w-5 h-5 text-[#3E2F28]' />
              </div>
              <div>
                <h4 className='font-serif font-bold text-[#F3EFE6]'>
                  Join BookNook Premium
                </h4>
                <p className='text-xs text-[#F3EFE6]/70'>
                  Get exclusive deals & early access
                </p>
              </div>
            </div>
            <div className='text-[#F3EFE6]/50'>
              <span className='text-xl'>›</span>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}

function CategoryPill({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`
                px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors
                ${
                  active
                    ? "bg-[#4A3A30] text-[#F9F4EC]"
                    : "bg-transparent border border-[#4A3A30]/20 text-[#4A3A30] hover:bg-[#4A3A30]/5"
                }
            `}
    >
      {label}
    </button>
  )
}

function FeaturedCard({
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
      <div className='aspect-[2/3] rounded-xl shadow-md overflow-hidden relative'>
        <img
          src={image}
          alt={title}
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
          <button className='w-8 h-8 rounded-full bg-[#4A3A30] flex items-center justify-center text-[#F9F4EC] hover:bg-[#3E2F28] transition-colors'>
            <ShoppingBag className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className='relative h-24 rounded-2xl overflow-hidden shadow-sm group cursor-pointer'>
      <div className='absolute inset-0 w-full h-full'>
        <img
          src={image}
          alt={title}
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

function NewArrivalCard({
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
    <div className='flex-none w-[120px] snap-start flex flex-col gap-2 group'>
      <div className='aspect-[2/3] rounded-xl shadow-sm overflow-hidden relative'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>
      <div className='space-y-0.5'>
        <h3 className='font-serif font-bold text-[#4A3A30] text-sm leading-tight line-clamp-1'>
          {title}
        </h3>
        <p className='text-[10px] text-[#8C705F] line-clamp-1'>{author}</p>
        <span className='font-bold text-[#4A3A30] text-xs block mt-1'>
          {price}
        </span>
      </div>
    </div>
  )
}

function BestSellerItem({
  title,
  author,
  price,
  rating,
  reviews,
  image,
}: {
  title: string
  author: string
  price: string
  rating: number
  reviews: number
  image: string
}) {
  return (
    <div className='bg-white p-3 rounded-2xl shadow-sm border border-[#F0EAE0] flex gap-4'>
      <div className='w-20 aspect-[2/3] rounded-lg overflow-hidden shrink-0 shadow-sm'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
      <div className='flex-1 flex flex-col justify-between py-1'>
        <div>
          <h3 className='font-serif font-bold text-[#4A3A30] text-lg leading-tight'>
            {title}
          </h3>
          <p className='text-sm text-[#8C705F]'>{author}</p>
          <div className='flex items-center gap-1 mt-1'>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? "text-[#4A3A30] fill-[#4A3A30]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className='textxs text-[#8C705F] ml-1'>({reviews})</span>
          </div>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <span className='font-bold text-[#4A3A30] text-lg'>{price}</span>
          <Button className='bg-[#4A3A30] text-[#F9F4EC] hover:bg-[#3E2F28] h-8 px-4 text-xs font-bold rounded-lg uppercase'>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}
