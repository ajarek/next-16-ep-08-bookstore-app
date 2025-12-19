"use client"

import { Filter, Star, Truck, Crown } from "lucide-react"
import { BottomNav } from "@/components/BottomNav"
import { Button } from "@/components/ui/button"
import BestSellerItem from "@/components/BestSellerItem"
import { FeaturedCard } from "@/components/FeaturedCard"
import { CategoryCard } from "@/components/CategoryCard"
import { NewArrivalCard } from "@/components/NewArrivalCard"
import books from "@/data/books.json"
import { useState } from "react"
import Greeting from "@/components/Greeting"

export default function Shop() {
  const [featuredBooks, setFeaturedBooks] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  return (
    <div className='min-h-screen  pb-24 font-sans selection:bg-primary/20'>
      <main className='container max-w-5xl mx-auto px-5 space-y-8 pt-2'>
        <Greeting label='You are in the store,' />
        {/* Staff Picks Banner */}
        <div className='relative overflow-hidden rounded-4xl h-48 shadow-lg group'>
          <div className='absolute inset-0 bg-linear-to-r from-[#3E2F28] to-[#5D463C]' />
          {/* Decorative sheen */}
          <div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-50' />

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

        {featuredBooks ? (
          <section className='space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-serif font-bold text-[#4A3A30] dark:text-primary'>
                Featured Books
              </h2>
              <Button
                variant='ghost'
                size='sm'
                className='text-[#8C705F] hover:text-[#7A6050] hover:bg-transparent text-xs uppercase tracking-wide font-bold px-2'
                onClick={() => setFeaturedBooks(false)}
              >
                View All
              </Button>
            </div>
            <div className='flex gap-4 overflow-x-auto pb-6 -mx-5 px-5 scrollbar-hide snap-x'>
              {books
                .filter((book) => book.feature)
                .map((book) => (
                  <FeaturedCard
                    key={book.id}
                    id={book.id.toString()}
                    title={book.title}
                    author={book.author}
                    price={book.price.toFixed(2)}
                    image={book.image}
                    category={book.category || ""}
                  />
                ))}
            </div>
            {/* All Books */}
          </section>
        ) : (
          <section className='space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-serif font-bold text-[#4A3A30] dark:text-primary'>
                All Books{" "}
                {selectedCategory === "All" ? "" : `(${selectedCategory})`}
              </h2>
              <Button
                variant='ghost'
                size='sm'
                className='text-[#8C705F] hover:text-[#7A6050] hover:bg-transparent text-xs uppercase tracking-wide font-bold px-2'
                onClick={() => setFeaturedBooks(true)}
              >
                View Featured
              </Button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
              {books
                .filter(
                  (book) =>
                    book.category === selectedCategory ||
                    selectedCategory === "All"
                )
                .map((book) => (
                  <FeaturedCard
                    key={book.id}
                    id={book.id.toString()}
                    title={book.title}
                    author={book.author}
                    price={book.price.toFixed(2)}
                    image={book.image}
                    category={book.category || ""}
                  />
                ))}
            </div>
          </section>
        )}

        {/* Browse by Category */}
        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-serif font-bold text-[#4A3A30] dark:text-primary'>
              Browse by Category
            </h2>
            <Button
              variant='ghost'
              size='sm'
              className='text-[#8C705F] hover:text-[#7A6050] hover:bg-transparent text-xs uppercase tracking-wide font-bold px-2'
              onClick={() => setSelectedCategory("All")}
            >
              View All
            </Button>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <CategoryCard
              title='Fiction'
              image='https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=400&auto=format&fit=crop'
              onClick={() => setSelectedCategory("Fiction")}
            />
            <CategoryCard
              title='Non-Fiction'
              image='https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=400&auto=format&fit=crop'
              onClick={() => setSelectedCategory("Non-Fiction")}
            />
            <CategoryCard
              title='Poetry'
              image='https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&w=400&auto=format&fit=crop'
              onClick={() => setSelectedCategory("Poetry")}
            />
            <CategoryCard
              title='Biography'
              image='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&auto=format&fit=crop'
              onClick={() => setSelectedCategory("Biography")}
            />
          </div>
        </section>

        {/* Fresh from the Press Banner */}
        <div className='bg-[#4E8B41] rounded-4xl p-6 relative overflow-hidden shadow-md'>
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
            <h2 className='text-xl font-serif font-bold text-[#4A3A30] dark:text-primary'>
              New Arrivals
            </h2>
          </div>
          <div className='flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide snap-x'>
            {books
              .filter((book) => book.new)
              .map((book) => (
                <NewArrivalCard
                  key={book.id}
                  id={book.id.toString()}
                  title={book.title}
                  author={book.author}
                  price={book.price.toFixed(2)}
                  image={book.image}
                  category={book.category || ""}
                />
              ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-serif font-bold text-[#4A3A30] dark:text-primary'>
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
            {books
              .filter((book) => book.best)
              .map((book) => (
                <BestSellerItem
                  key={book.id}
                  id={book.id.toString()}
                  title={book.title}
                  author={book.author}
                  price={book.price.toFixed(2)}
                  image={book.image}
                  category={book.category || ""}
                />
              ))}
          </div>
        </section>

        {/* Info Banners */}
        <div className='space-y-3'>
          <div className='bg-[#F3EFE6] rounded-2xl p-4 flex items-center gap-4 border border-[#E6DCC8]'>
            <div className='w-10 h-10 rounded-full bg-[#4A3A30] flex items-center justify-center shrink-0'>
              <Truck className='w-5 h-5 text-[#F3EFE6]' />
            </div>
            <div>
              <h4 className='font-serif font-bold text-[#4A3A30] dark:text-primary'>
                Free Shipping
              </h4>
              <p className='text-xs text-[#8C705F] dark:text-primary'>
                On orders over $50.00
              </p>
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
