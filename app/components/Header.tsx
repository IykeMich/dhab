"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactRoundIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import { RiShoppingBasket2Line, RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Product", "Recipes", "About Us"];

  return (
    <main className="bg-[#f5f5f5] relative flex h-full w-full overflow-hidden">
      <div className="mb-24">
        {/* Background Images */}
        <div className="absolute right-0 top-0 bottom-0 h-full">
          <Image
            src="/images/header/Rectangle1.svg"
            alt="Vercel Logo"
            width={300}
            height={500}
            className="w-full h-full scale-x-150 overflow-hidden"
          />
        </div>
        <div className="absolute -right-8 lg:-right-2 top-0 h-full">
          <Image
            src="/images/header/circle.svg"
            alt="Vercel Logo"
            width={300}
            height={500}
            className="w-full h-full"
          />
        </div>

        {/* Navbar */}
        <div className="nav_sector w-full h-12 z-50 absolute top-0 left-0 px-4 md:px-8">
          <div className="nav_setup flex justify-between items-center pt-3 md:py-12 xl:py-8 mx-4 xl:mx-8 space-x-4 xl:space-x-8">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Image src="/images/brandLogo.svg" alt="Logo" width={30} height={50} />
              <h4 className="text-base xl:text-xl text-black font-bold">Dhabi Restaurant</h4>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((nav) => (
                <h4 key={nav} className="text-sm lg:text-base xl:text-lg text-black font-normal cursor-pointer hover:text-gray-700">
                  {nav}
                </h4>
              ))}
            </div>

            {/* Contact & Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="p-2 lg:p-4 text-black bg-[#DAE952] hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-950 transition-all duration-300 ease-in text-sm lg:text-lg font-semibold">
                Special Offer
              </Button>
              <h4 className="text-sm lg:text-base xl:text-lg flex text-black items-center">
                <PhoneCall className="w-4 lg:w-6 h-4 lg:h-6 mr-1" />
                <span>+2349039374531</span>
              </h4>
              <ContactRoundIcon className="w-5 lg:w-6 h-5 lg:h-6 cursor-pointer" />
              <RiShoppingBasket2Line className="w-5 lg:w-6 h-5 lg:h-6 cursor-pointer" />
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
                {menuOpen ? <RiCloseLine className="w-8 h-8" /> : <RiMenu3Line className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-start pl-4 space-y-6 pt-24 transition-all duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {navLinks.map((nav) => (
            <h4 key={nav} className="text-lg font-medium text-black cursor-pointer hover:text-gray-700">
              {nav}
            </h4>
          ))}
          <Button className="text-black bg-[#DAE952] hover:text-white hover:bg-black transition-all duration-300 ease-in text-lg font-semibold">
            Special Offer
          </Button>
          <h4 className="text-lg flex text-black items-center">
            <PhoneCall className="w-6 h-6 mr-2" />
            <span>+2349039374531</span>
          </h4>
        </div>

        {/* Hero Section */}
        <div className="flex justify-between items-center px-4 lg:px-8 mx-4 lg:mx-8 mt-20 md:mt-32">
          <div className="flex flex-col text-black">
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight">All Delicious</h1>
            <h1 className="font-bold text-xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight tracking-wide">Asian</h1>
            <p className="text-sm md:text-lg lg:text-xl font-semibold">Eggs, Salad, Fruits, Pasta</p>
            <div className="mt-6">
              <Button className="p-4 text-medium text-black bg-[#DAE952] hover:bg-black hover:text-white transition-all duration-100 ease-in rounded-2xl">
                Find for more
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="z-10 absolute right-2 md:right-12 lg:right-24 xl:right-16 top-12 md:top-20 lg:top-24 xl:top-20">
            <Image
              src="/images/header/image.svg"
              alt="Vercel Logo"
              width={100}
              height={300}
              className="w-auto xl:w-96 h-[12rem] md:h-[18rem] lg:h-[40vh] xl:h-[60vh] 2xl:h-[32vh]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
