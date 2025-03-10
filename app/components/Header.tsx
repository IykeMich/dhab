import { Button } from '@/components/ui/button'
import { ContactRoundIcon, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { RiShoppingBasket2Line } from 'react-icons/ri'

export default function Header() {
  return (
    <main className="bg-[#f5f5f5] relative flex h-full w-full overflow-hidden">

      <div className="absolute right-0 top-0 bottom-0 h-full">
        <Image src="/images/header/Rectangle1.svg" alt="Vercel Logo" width={300} height={500}
        className='w-full h-full overflow-hidden'
        />
      </div>
      <div className="absolute -right-8 lg:-right-2 top-0 h-full">
        <Image src="/images/header/circle.svg" alt="Vercel Logo" width={300} height={500}
        className='w-full h-full'
        />
      </div>
      {/* <div className='py-8 px-8 mx-8 w-full'>   */}
        <div className="nav_sector w-full h-12 z-0 absolute ">
            <div className="nav_setup flex justify-between items-center py-8 px-8 mx-8">
                <div className="logosection flex items-center space-x-4">
                    <Image src="/images/brandLogo.svg" alt="Vercel Logo" width={30} height={50} />
                    <h4 className='text-xl text-black font-bold'>Dhabi Restaurant</h4>
                </div>
                <div className="Links flex items-center space-x-4">
                    
                    <h4 className='text-sm lg:text-base text-black font-normal'>Product</h4>
                    <h4 className='text-sm lg:text-base text-black font-normal'>Recipes</h4>
                    <h4 className='text-sm lg:text-base text-black font-normal'>About Us</h4>
                </div>
                <div className="PhoneSection flex items-center space-x-4">
                    <Button className='p-4 text-medium text-black bg-[#DAE952]
                    hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-950
                    transition-all duration-300 ease-in'> Special Offer </Button>
                    
                    <h4 className='text-xl flex text-black items-center'>
                        <PhoneCall /> <span> +2349039374531 </span>
                    </h4>
                </div>
                <div className="logosection flex items-center space-x-8">
                    <ContactRoundIcon className='w-8 h-8'/>
                    <RiShoppingBasket2Line className='w-8 h-8'/>
                    
                </div>

            </div>
        
        </div>
        <div className="flex justify-between">
            <div className="AllDel flex flex-col justify-center items-start py-8 px-8 mx-8 z-1">
                <div className="text-black leading-2 text-5xl lg:text-6xl xl:text-8xl flex flex-col mt-24">
                    <h1 className='leading-tight'>All Delicious</h1>
                    <h1 className="font-bold leading-1 tracking-wide"> Asian</h1>
                    <p className='text-lg lg:text-xl font-semibold'>Eggs, Salad, fruits, Pasta </p>
                </div>
                <div className="flex my-6">
                <Button className='p-4 text-medium text-black bg-[#DAE952]
                        hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-950
                        transition-all duration-100 ease-in rounded-2xl'> View More </Button>
                </div>
            </div>
            <div className="z-10 absolute right-12 lg:right-24 top-20 lg:top-24 xl:top-20">
                <Image src="/images/header/image.svg" alt="Vercel Logo" width={600} height={300} 
                className='w-full h-[18rem] lg:h-[24rem] xl:h-[30rem]'
                />
            </div>
        </div>
      {/* </div> */}

    </main>
  )
}
