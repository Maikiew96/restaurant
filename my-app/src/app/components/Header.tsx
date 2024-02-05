import React from 'react'
import { ModeToggle } from './ui/ThemeToggler'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex justify-around items-center h-fit-content my-12 w-full '>

      <Link href={"/"}>
        <div>
          <h1 className='text-3xl'>FOODLY</h1>
        </div>
      </Link>

        <div>
            {/*Dark mode toggler komt hier*/}
            <ModeToggle />
        </div>
    </header>
  )
}
