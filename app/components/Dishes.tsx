import Image from 'next/image'
import React from 'react'

export default function Dishes() {
    const dishesList = [
        {id: 1, name: 'Special salad', subtext: 'Food is any substance consumed by an organism for nutritional support.',  image: '/images/dishes/salad1.svg'},
        {id: 2, name: 'Russian salad', subtext: 'Food is any substance consumed by an organism for nutritional support.',  image: '/images/dishes/salad2.svg'},
        {id: 3, name: 'Asian salad', subtext: 'Food is any substance consumed by an organism for nutritional support.',  image: '/images/dishes/salad3.svg'},
        {id: 4, name: 'American salad', subtext: 'Food is any substance consumed by an organism for nutritional support.',  image: '/images/dishes/salad4.svg'},
    ];
  return (
    <>
    <main className="bg-[#DAE952]/20 w-full">
        <div className="mx-8 py-8">
            <div className=" header text-center">
                <h1 className="text-4xl font-normal">Our Delicious and Special Salad</h1>
                <h4 className='text-[#DAE952] font-semibold text-4xl leading-normal'>Asian</h4>
                <p className='font-normal text-black tracking-tight leading-5 pt-6'>
                Food is any substance consumed by an organism for nutritional support.
                </p>
            </div>
            <div className="cards grid md:grid-cols-2 lg:grid-cols-4 pt-24 gap-8 md:mx-12">
            {dishesList.map((dish) => (
                <div key={dish.id} className="card rounded-tr-2xl rounded-bl-2xl shadow-xl shadow-gray-300 
                px-4 pb-4 cursor-pointer hover:shadow-2xl hover:shadow-gray-300 group bg-[#fafaf970] tranlation ease-out duration-200">
                    <div className="card-content pt-4 pb-12">
                    <div className="Image-Sector flex w-full items-center justify-center pb-6"> 
                        <Image
                            src={dish.image}
                            alt="Vercel Logo"
                            width={100}
                            height={100}
                            className="w-[40vh] h-[40%] overflow-hidden object-cover"
                        />
                        </div>
                        <div className="text-center">
                            <h1 className='font-semibold text-2xl tracking-wide'>{dish.name}</h1>
                            <p className='font-normal text-base lg:text-lg tracking-normal leading-1 pt-4'>
                            {dish.subtext}        
                            </p>
                        </div>
                    </div>
                </div>
            ))}
                
            </div>
        </div>
    </main>
      
    </>
  )
}
