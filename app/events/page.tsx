"use client"

import { Calendar, MapPin, Clock, Users } from "lucide-react"
import Greeting from "@/components/Greeting"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/BottomNav"
import Image from "next/image"
import  eventData  from "@/data/events.json"
interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  attendees: number
  image: string
  category: string
  price?: number
}


export default function Events() {
  return (
    <div className='min-h-screen  pb-24 font-sans selection:bg-primary/20'>
      <main className='container max-w-5xl mx-auto px-5 space-y-8 pt-2'>
        <Greeting label='You are checking out our events,' />

        {/* Featured Event Banner */}
        <div className='relative overflow-hidden rounded-3xl h-64 shadow-lg'>
          <div className='absolute inset-0 bg-linear-to-r from-[#8B6F47] to-[#A0826D]' />
          <div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-40' />

          <div className='absolute inset-0 p-8 flex flex-col justify-between z-10'>
            <div>
              <span className='inline-block bg-white text-[#8B6F47] text-xs font-bold px-3 py-1.5 rounded-full mb-3'>
                Featured Event
              </span>
              <h2 className='text-2xl lg:text-3xl font-serif text-white leading-tight'>
                {eventData[0].title}
              </h2>
            </div>

            <div className='space-y-2'>
              <div className='flex items-center gap-2 text-white text-sm'>
                <Calendar className='w-4 h-4' />
                <span>{eventData[0].date}</span>
              </div>
              <div className='flex items-center gap-2 text-white text-sm'>
                <MapPin className='w-4 h-4' />
                <span>{eventData[0].location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className='text-2xl font-serif  dark:text-primary mb-6'>
            Upcoming Events
          </h3>

          <div className='space-y-4'>
            {eventData.map((event: Event) => (
              <div
                key={event.id}
                className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#E6DCC8]'
              >
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
                  {/* Event Image */}
                  <div className='w-full lg:w-32 h-24 lg:h-32 rounded-xl overflow-hidden flex-shrink:0 bg-[#E6DCC8]'>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={32}
                      height={32}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  {/* Event Details */}
                  <div className='flex-1 space-y-3'>
                    <div className='flex items-start justify-between gap-4'>
                      <div>
                        <div className='flex items-center gap-2 mb-2'>
                          <span className='inline-block bg-[#F0E6D2] text-[#8B6F47] text-xs font-bold px-2.5 py-1 rounded-full'>
                            {event.category}
                          </span>
                        </div>
                        <h4 className='text-lg font-serif font-bold text-[#4A3A30] leading-tight line-clamp-2'>
                          {event.title}
                        </h4>
                      </div>
                      {event.price && event.price > 0 && (
                        <div className='text-right'>
                          <p className='text-sm text-[#8C705F]'>Price</p>
                          <p className='text-xl font-bold text-[#4A3A30] dark:text-primary'>
                            ${event.price}
                          </p>
                        </div>
                      )}
                    </div>

                    <p className='text-sm text-[#8C705F] line-clamp-2'>
                      {event.description}
                    </p>

                    {/* Event Info */}
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2'>
                      <div className='flex items-center gap-2 text-xs text-[#8C705F]'>
                        <Calendar className='w-4 h-4 flex-shrink:0' />
                        <span className='line-clamp-1'>{event.date}</span>
                      </div>
                      <div className='flex items-center gap-2 text-xs text-[#8C705F]'>
                        <Clock className='w-4 h-4 flex-shrink:0' />
                        <span className='line-clamp-1'>{event.time}</span>
                      </div>
                      <div className='flex items-center gap-2 text-xs text-[#8C705F]'>
                        <MapPin className='w-4 h-4 flex-shrink:0' />
                        <span className='line-clamp-1'>{event.location}</span>
                      </div>
                      <div className='flex items-center gap-2 text-xs text-[#8C705F]'>
                        <Users className='w-4 h-4 flex-shrink:0' />
                        <span>{event.attendees} going</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-3 pt-3'>
                      <Button className='flex-1 bg-[#8B6F47] hover:bg-[#7A6040] text-white rounded-lg font-semibold'>
                        Reserve Spot
                      </Button>
                      <Button
                        variant='outline'
                        className='flex-1 border-[#8B6F47] text-[#8B6F47] hover:bg-[#F9F4EC] rounded-lg font-semibold'
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='bg-linear-to-r from-[#E8DCC4] to-[#F5F0E8] rounded-2xl p-8 border border-[#D9CDB5] text-center'>
          <h3 className='text-xl font-serif text-[#4A3A30] dark:text-primary mb-2'>
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className='text-sm text-[#8C705F] dark:text-primary mb-4'>
            Subscribe to our event newsletter to get notified about upcoming
            events and special book releases.
          </p>
          <Button className='bg-[#8B6F47] hover:bg-[#7A6040] text-white rounded-lg font-semibold px-8'>
            Subscribe to Newsletter
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
