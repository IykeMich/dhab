import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Chef() {
  return (
    <>
      <main className="bg-[#f5f5f5]">
      <div className="mx-8 py-8">
            <div className="welcomeSection gap-16 overflow-hidden md:mx-12 lg:mx-24 flex flex-col md:flex-row justify-between items-center pt-12">
                <div className="text text-center flex flex-col justify-center w-full md:w-1/2">
                        <div className="text-2xl lg:text-4xl font-semibold leading-snug pb-4 lg:pb-8">
                            <h1> Our <span className='text-[#DAE952]'>Dhabi</span> 
                                <span className='block'> Restaurant Report </span>        
                                <span className='block'> Chef </span> 
                            </h1>       
                            
                        </div>
                        <div className="longer-text">
                            <p className='text-xs lg:text-base font-normal leading-tight tracking-tight'>
                            food, substance consisting essentially of protein, carbohydrate, fat, 
                            and other nutrients used in the body of an organism to sustain growth and vital 
                            processes and to furnish energy. The absorption and utilization of food by the body is 
                            fundamental to nutrition and is facilitated by digestion 
                            </p>
                        </div>
                        <div className="mt-6">
                            <Button className="p-4 text-medium text-black bg-[#DAE952] hover:bg-black hover:text-white transition-all duration-100 ease-in rounded-2xl">
                            Find for more
                            </Button>
                        </div>
                </div>
                <div className="Image-sectionq w-full items-center justify-center md:w-1/2 relative">
                    <Image src="/images/chef.svg" alt='Special Salad' width={200} height={200} 
                    className='relative w-[60vw] xl:w-[80vw] h-[40vh] md:h-[40vh] lg:h-[60vh] xl2:h-[80vh] 
                    lg2:h-[50vh] xl2:-top-12 -top-[5rem] -right-[15%] md:-right-0 md:-top-12 lg2:-top-20 z-10'/>
                    <Image src="/images/semiCircle.svg" alt='Special Salad' width={200} height={200}
                    className='absolute w-full h-[30vh] md:h-[50vh] lg:h-[50vh] lg2:h-[40vh] top-8 md:top-0 lg:top-12'/>
                </div>             
            </div>
        </div>
      </main>
    </>
  )
}
