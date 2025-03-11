import { Button } from '@/components/ui/button'
import { ContactRoundIcon, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { RiShoppingBasket2Line } from 'react-icons/ri'

export default function Header() {

const navLinks = ['Product', 'Recipes', 'About Us']
  return (
    <main className="bg-[#f5f5f5] relative flex h-full w-full overflow-hidden">

        <div className="mb-24">        
            <div className="absolute right-0 top-0 bottom-0 h-full">
                <Image src="/images/header/Rectangle1.svg" alt="Vercel Logo" width={300} height={500}
                className='w-full h-full scale-x-150 overflow-hidden'
                />
            </div>
            <div className="absolute -right-8 lg:-right-2 top-0 h-full">
                <Image src="/images/header/circle.svg" alt="Vercel Logo" width={300} height={500}
                className='w-full h-full'
                />
            </div>
            <div className="nav_sector w-full h-12 z-0 absolute hidden md:block">
                <div className="nav_setup flex justify-between items-center py-6 xl:py-8 px-4 xl:px-8 mx-4 xl:mx-8 space-x-4 xl:space-x-8">
                    <div className="logosection flex items-center space-x-4">
                        <Image src="/images/brandLogo.svg" alt="Vercel Logo" width={30} height={50} />
                        <h4 className='text-base xl:text-xl text-black font-bold'>Dhabi Restaurant</h4>
                    </div>
                    <div className="Links flex items-center space-x-4"> 
                        {navLinks.map((nav) => (
                            <h4 key={nav} className='text-sm lg:text-base xl:text-lg text-black font-normal'>{nav}</h4>
                        ))}                
                    </div>
                    <div className="PhoneSection flex items-center space-x-4">
                        <Button className='p-2 lg:p-4 text-black bg-[#DAE952]
                        hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-950
                        transition-all duration-300 ease-in text-sm lg:text-lg font-semibold'> Special Offer </Button>
                        
                        <h4 className='text-sm lg:text-base xl:text-lg flex text-black items-center'>
                            <PhoneCall className='w-4 lg:w-8 h-4 lg:h-8'/> 
                            <span> +2349039374531 </span>
                        </h4>
                    </div>
                    <div className="logosection flex items-center space-x-4 xl:space-x-8">
                        <ContactRoundIcon className='w-4 lg:w-8 h-4 lg:h-8'/>
                        <RiShoppingBasket2Line className='w-4 lg:w-8 h-4 lg:h-8'/>
                        
                    </div>

                </div>
            
            </div>
            {/* Hero Section */}
            <div className="flex justify-between items-center px-4 lg:px-8 mx-4 lg:mx-8 mt-20 md:mt-32">
                <div className="flex flex-col text-black">
                    <h1 className="text-5xl lg:text-6xl xl:text-8xl leading-tight">All Delicious</h1>
                    <h1 className="font-bold text-5xl lg:text-6xl xl:text-8xl leading-tight tracking-wide">
                        Asian
                    </h1>
                    <p className="text-lg lg:text-xl font-semibold">Eggs, Salad, Fruits, Pasta</p>
                    <div className="mt-6">
                        <Button className="p-4 text-medium text-black bg-[#DAE952] hover:bg-black hover:text-white transition-all duration-100 ease-in rounded-2xl">
                        Find for more
                        </Button>
                    </div> 
                </div>
                <div className="z-10 absolute right-12 lg:right-24 xl:right-16 top-20 lg:top-24 xl:top-20">
                    <Image src="/images/header/image.svg" alt="Vercel Logo" width={100} height={300} 
                    className='w-auto xl:w-96 h-[18rem] lg:h-[40vh] lg2:h-[50%] xl:h-[60vh] 2xl:h-[32vh]'
                    />
                </div>
            </div>
            
        </div>
    </main>
  )
}