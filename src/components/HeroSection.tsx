'use client';
import Link from 'next/link'
import { Button } from "./ui/moving-border";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";

function HeroSection() {
  return (
    
    <div className='h-auto md:h-[40rem] w-full rounded-m flex flex-col items-center
     justify-center relative overflow-hidden mx-auto 
     py-10 md:py-0'
    >
        <WavyBackground >
        <div 
        className='p-4 relative z-10 w-full text-center '>
            <h1
             className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b 
             from-neutral-50 to-neutral-400"
             >Discover the Entrepreneur in You</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg 
            text-neutral-300 max-w-lg mx-auto"
            >Whether you're dreaming of launching your own startup,
            growing your existing venture, or exploring innovative ideas, our expert-led courses will empower you to turn your vision into reality. 
            Take the plunge with us today and embark on the exhilarating adventure of entrepreneurship.</p>
        </div>
        </WavyBackground>
        <div className="">
            <Link href={"/Courses"}>
                <Button>Explore Courses</Button>
                </Link>
        </div>
        

    </div>
  )
}

export default HeroSection