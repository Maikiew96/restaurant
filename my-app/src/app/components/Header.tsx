import React from 'react'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import { ModeToggle } from './ui/ThemeToggler'
export const Header = () => {
  return (
    <header className='flex justify-around items-center h-fit-content my-12 w-full '>

        <div>
          <h1 className='text-3xl'>Pizzario</h1>
        </div>
        
     
        <div>
            {/*Dark mode toggler komt hier*/}
            <ModeToggle />
        </div>
    </header>
  )
}
