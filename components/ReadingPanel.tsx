"use client"

import * as React from "react"
import { Book } from "lucide-react"
import { BottomNav } from "@/components/BottomNav"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PickupCard from "./PickupCard"
import ReadingCard from "./ReadingCard"

export function ReadingPanel() {
  return (
    <div className='min-h-screen w-full max-w-5xl mx-auto px-5 pb-24 font-sans selection:bg-primary/20'>
      {/* Header */}
      <header className='sticky top-0 z-30 flex items-center justify-between px-5 py-4 bg-background/95 backdrop-blur-sm'>
        <div className='flex items-center gap-2.5'>
          <Book className='w-6 h-6 text-primary fill-current' />
          <span className='text-2xl font-serif font-bold tracking-tight text-primary'>
            BOOKNOOK
          </span>
        </div>
        <div className='relative w-10 h-10 rounded-full border-2  shadow-sm overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
            alt='User Avatar'
            fill
            className='w-full h-full object-cover'
          />
        </div>
      </header>

      <main className='w-full max-w-5xl mx-auto px-5 space-y-8 pt-2'>
        {/* Greeting */}
        <section className='animate-in fade-in slide-in-from-bottom-2 duration-700'>
          <h1 className='text-3xl font-serif text-[#4A3A30]'>
            Good evening, Alex
          </h1>
        </section>

        {/* Hero Section */}
        <section className='space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100'>
          <div className='relative group overflow-hidden rounded-[2rem] shadow-xl h-[320px]'>
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

          <div className='bg-[#FAF7F2] p-5 rounded-[1.5rem] shadow-sm border border-[#E6DCC8] flex items-center justify-between group cursor-pointer hover:border-[#D6CCC0] transition-colors gap-4'>
            <div className='relative h-28 aspect-[2/3] rounded-md overflow-hidden shrink-0 shadow-md rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300'>
              <Image
                src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop'
                fill
                className='w-full h-full object-cover'
                alt='Event Book'
              />
            </div>
            <div className='flex-1 space-y-1 py-1'>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-[10px] font-bold tracking-widest text-[#8C705F] uppercase'>
                  Author Event
                </span>
                <span className='bg-white px-2 py-1 rounded-md text-[10px] font-bold text-[#4A3A30] shadow-sm border border-black/5'>
                  OCT 24
                </span>
              </div>
              <h3 className='text-xl font-serif text-[#4A3A30] leading-snug'>
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
            <h2 className='text-xl font-serif text-[#4A3A30]'>
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
            <ReadingCard
              title='The Secret History'
              progress={75}
              image='https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop'
            />
            <ReadingCard
              title='Autumn'
              progress={30}
              image='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop'
            />
            <ReadingCard
              title='Norwegian Wood'
              progress={12}
              image='https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=600&auto=format&fit=crop'
            />
          </div>
        </section>

        {/* Your Holds Ready */}
        <section className='space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 pb-4'>
          <div className='flex items-center justify-between px-1'>
            <h2 className='text-xl font-serif text-[#4A3A30]'>
              Your Holds Ready
            </h2>
          </div>

          <div className='grid gap-4'>
            <PickupCard
              title='Beautiful World'
              author='Sally Rooney'
              status='Available at Main Desk'
              tag='PICKUP'
              image='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=300&auto=format&fit=crop'
            />
            <PickupCard
              title='Klara and the Sun'
              author='Kazuo Ishiguro'
              status='Available at Main Desk'
              tag='PICKUP'
              image='https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=300&auto=format&fit=crop'
            />
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
