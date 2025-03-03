import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='text-center h-auto md:h-[40rem] sm:h-[80rem] w-full flex flex-col justify-center item-center rounded-md mx-auto  py-10 md:py-0 relative overflow-hidden'>
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

        <div className=''>
            <h1
                className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400' 
            > Master the art of Music</h1>
            <p className='text-l mt-2'>Discover the secrets of harmony, rhythm, and melody, and unlock the power of your soul.</p>
        </div>

        <div className='mt-5'>
            <Button
                borderRadius="1.75rem"
                className="bg-black dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800"
            >
                <Link href={"/course"}>
                    Borders are cool
                </Link>
            </Button>
        </div>

    </div>
  )
}

export default HeroSection;