"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import PickupCard from "./PickupCard"
import ReadingCard from "./ReadingCard"
import books from "@/data/books.json"
import Greeting from "./Greeting"
export function ReadingPanel() {
  return (
    <div className='min-h-screen w-full max-w-5xl mx-auto px-5 pb-24 font-sans selection:bg-primary/20'>
      <main className='w-full   px-5 space-y-8 pt-2'>
        {/* Greeting */}
        <Greeting label='Good evening,' />

        {/* Hero Section */}
        <section className='space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100'>
          <div className='relative group overflow-hidden rounded-4xl shadow-xl h-[320px]'>
            {/* Fallback image if generation fails */}
            <div className="absolute inset-0 bg-[url('/images/hero-image.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20   text-white text-center'>
              <p className=' text-sm font-medium mb-1 tracking-wide'>
                New Arrivals & Staff Picks
              </p>
              <h2 className='text-4xl font-serif  mb-6 leading-tight'>
                Curl Up with <br /> Fall Favorites
              </h2>
              <Button className='bg-[#8C705F] hover:bg-[#7A6050]  rounded-xl px-8 py-6 text-sm uppercase tracking-widest font-medium shadow-lg hover:shadow-xl transition-all active:scale-95'>
                Browse Now
              </Button>
            </div>
          </div>

          <div className='bg-[#FAF7F2] p-5 rounded-3xl shadow-sm border border-[#E6DCC8] flex items-center justify-between group cursor-pointer hover:border-[#D6CCC0] transition-colors gap-4'>
            <div className='relative rounded-md overflow-hidden shrink-0 shadow-md -rotate-3 group-hover:rotate-0 transition-transform duration-300 '>
              <Image
                src='/images/author-event.jpg'
                width={100}
                height={150}
                className='w-full h-full object-cover shadow-2xl'
                alt='Event Book'
              />
            </div>
            <div className='flex-1 space-y-1 py-1'>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-[10px] font-bold tracking-widest text-[#8C705F] uppercase'>
                  Author Event
                </span>
                <span className='bg-white px-2 py-1 rounded-md text-[10px] font-bold text-[#4A3A30] dark:text-primary shadow-sm border border-black/5'>
                  DEC 25
                </span>
              </div>
              <h3 className='text-xl font-serif text-[#4A3A30] dark:text-primary leading-snug'>
                Evening with <br /> Elena Ferrante
              </h3>
              <p className='text-[#8C705F] text-xs font-medium pt-1'>
                7:00 PM • Main Hall
              </p>
            </div>
          </div>
        </section>

        {/* Currently Reading */}
        <section className='space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200'>
          <div className='flex items-center justify-between px-1'>
            <h2 className='text-xl font-serif text-[#4A3A30] dark:text-primary'>
              Currently Reading
            </h2>
            <Button
              variant='ghost'
              size='sm'
              className='text-[#8C705F] hover:text-[#7A6050] hover:bg-transparent text-sm font-medium px-0'
            >
              View All
            </Button>
          </div>

          <div className='flex gap-4 overflow-x-auto pb-6 -mx-5 px-5 scrollbar-hide snap-x pt-2'>
            {books
              .filter((book) => book.progress > 0)
              .map((book) => (
                <ReadingCard
                  key={book.id}
                  title={book.title}
                  progress={book.progress}
                  image={book.image}
                />
              ))}
          </div>
        </section>

        {/* Your Holds Ready */}
        <section className='space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 pb-4'>
          <div className='flex items-center justify-between px-1'>
            <h2 className='text-xl font-serif  dark:text-primary'>
              Your Holds Ready
            </h2>
          </div>

          <div className='grid gap-4'>
            {books
              .slice(0, 4)

              .map((book) => (
                <PickupCard
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  status={book.status}
                  tag={book.tag}
                  image={book.image}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  )
}
