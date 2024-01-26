import React from 'react'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import { ModeToggle } from './ui/ThemeToggler'
export const Header = () => {
  return (
    <header className='flex justify-around items-center h-32 border border-green-500'>
        <div>
            <p>Titel komt hier</p>
        </div>
        <div>
            {/*Gebruik de Image component van Next.js voor optimalisatie */}
         <Image 
            src={Logo}
            alt="Restaurant logo"
            width={80}
            height={800}
        />
        </div>
        <div>
            {/*Dark mode toggler komt hier*/}
            <ModeToggle />
        </div>
    </header>
  )
}
