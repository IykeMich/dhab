'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import customers from '@/lib/data'

export default function Customers() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )
  return (
    <>
     <main className='bg-[#DAE952]/20 w-full' >
        <div className="p-8">
            <div className="title pb-12">
                <div className="text text-center flex flex-col justify-center w-full">
                    <div className="text-2xl lg:text-4xl font-semibold leading-snug pb-4 lg:pb-8">
                        <h1>Our <span className='text-[#DAE952]'>Dhabi </span> 
                            <span>Restaurant Happy</span>
                            <span className='block'>Customers</span>
                        </h1>
                                
                    </div>
                    <div className="longer-text">
                        <p className='text-xs lg:text-base font-normal leading-tight tracking-tight md:px-12 lg:px-20'>
                        A customer is a person or business that buys goods or services from another business. 
                        Customers are crucial because they generate revenue. Without them, businesses would go out of business.
                        </p>

                    </div>
                </div>
            </div>
            <div className="card w-full flex flex-col items-center md:mx-0 lg:mx-auto">
                <Carousel plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset} className="w-full max-w-sm md:max-w-lg lg:max-w-full">
                    <CarouselContent className="bg-transparent ">
                        {customers.map((person) => (
                        <CarouselItem key={person.id} className="md:basis-1/2 lg:basis-1/3 pt-12 z-10">
                            <div className="">
                                <Card className="card border-none rounded-tr-2xl rounded-bl-2xl shadow-sm shadow-gray-300 px-4 pb-4 
                                    cursor-pointer hover:shadow-2xl hover:shadow-gray-300  
                                    tranlation ease-out duration-200 w-full">
                                        <div className="flex items-center justify-center">
                                            <div className="inline-flex items-center justify-center rounded-full bg-white p-2 
                                            relative -right-2 md:-right-0 lg:-right-2 lg2:-right-2 xl2:-right-6 -top-12 shadow-md">
                                                <div className="flex items-center justify-center rounded-full overflow-hidden">
                                                    <Image src={person.image} alt="Customer" width={100} height={100} className="object-cover"/>
                                                </div>
                                            </div>
                                        </div>
                 
                                    <CardContent className="flex flex-col items-center justify-end pb-2 px-2">
                                        <p className='text-xs lg:text-base font-normal leading-tight tracking-tight pb-4'>
                                           {person.comment}
                                        </p>
                                        <h1 className='font-semibold text-2xl tracking-wide w-full text-center'>{person.name}</h1>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
     </main> 
    </>
  )
}


{/* <CarouselPrevious className='hidden md:flex'/> */}
{/* <CarouselNext className='hidden md:flex'/> */}