import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';

const bgStyle = {
  backgroundImage: `url('/images/banner.svg')`,
  backgroundPosititon: "top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed"
};

export default function Footer() {
  return (
    <>
     <main className='bg-[#DAE952]/20 w-full'>
        <div className="mx-4 md:text-16 lg:mx-32">
          <div style={bgStyle} className="relative rounded-2xl flex flex-col items-center text-center py-8 md:py-16 px-8">
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* Content */}
            <div className="py-8 relative z-10">
              <h1 className='text-2xl lg:text-4xl w-full text-center font-bold text-[#f5f5f5]'>
                Get our promo code to subscribe to our page and channel of food 
              </h1>

              {/* Input & Button Wrapper */}
              <div className="mt-12 items-center inline-flex justify-center ">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-white rounded-s-lg rounded-e-none border border-gray-300 focus:border-black focus:ring-2 focus:ring-black pr-4 md:pr-24"
                />
                <Button className="bg-[#DAE952] text-black hover:text-gray-400 px-6 py-2 rounded-e-md rounded-s-none hover:bg-gray-800 transition-all">
                  Subscribe
                </Button>
              </div>

            </div>
          </div>

          <div className="footer my-4 py-12">
            <div className="footer grid grid-cols-2 md:flex md:flex-row gap-4 justify-between items-start">
              <div className="logosection flex flex-col gap-4 md:w-1/4 items-center">
                <div className='flex items-center space-x-4'>
                  <Image src="/images/brandLogo.svg" alt="Vercel Logo" width={30} height={50} />
                  <h4 className='text-sm md:text-base xl:text-xl text-black font-bold'>Dhabi Restaurant</h4>
                </div>
                <div className="w-full">
                  <p className='text-xs lg:text-base font-normal leading-tight tracking-wide lg:tracking-tight text-gray-400'>
                  Managing restaurant menus and other information including location and opening hours. 
                  Managing the preparation of orders at a restaurant kitchen.
                  </p>
                </div>
              </div>
              <div className="NavigationSection flex flex-col gap-4 md:w-1/4 text-center">
               <div className=''>
                  <h4 className='text-base xl:text-xl text-black font-bold'> Navigations </h4>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  Products
                  </Link>
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  About Us
                  </Link>
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  Dish
                  </Link>
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  Asian
                  </Link>
                </div>
              </div>
              <div className="GenreSection flex flex-col gap-4 md:w-1/4 text-center">
               <div className=''>
                  <h4 className='text-base xl:text-xl text-black font-bold'> Genres </h4>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  Salad
                  </Link>
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                   Spicy
                  </Link>
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  Bowl
                  </Link>
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  Kitchen
                  </Link>
                  <Link href="/" className='text-xs lg:text-base font-normal leading-tight tracking-tight text-gray-400'>
                  Home
                  </Link>
                </div>
              </div>
              <div className="FollowUsSection flex flex-col gap-4 md:w-1/4 text-center">
               <div className=''>
                  <h4 className='text-base xl:text-xl text-black font-bold'> Follow Us </h4>
                </div>
                <div className="flex flex-col gap-4 justify-center w-full">
                  <Link href="/" className=' text-gray-400'>
                  <RiFacebookCircleLine className='w-full h-6' />
                  </Link>
                  <Link href="/" className=' text-gray-400'>
                   <RiTwitterLine className='w-full h-6' />
                  </Link>
                  <Link href="/" className=' text-gray-400'>
                  <RiInstagramLine className='w-full h-6' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright w-full text-center pb-4">
            <p className='text-base lg:text-lg mx-auto'>Developed with ❤️ by  <Link href="https://wa.me/+2349039374531" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">
              Montana </Link>   
            </p>
          </div>

        </div>
     </main> 
    </>
  )
}
