'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Search } from './search'

export const Header = () => {
  const pathname = usePathname()
  return (
    <>
      <header className='flex items-center justify-between p-4 bg-white w-full'>
        <div className='flex items-center space-x-8'>
          <h1 className='font-medium'>fav.</h1>
        </div>
        <nav>
          <ul className='flex space-x-8'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <a href='/collections' className='text-[#C5C5C5]'>
                Collections
              </a>
            </li>
          </ul>
        </nav>

        <div className='w-8 h-8 bg-gradient-to-br from-[#D9D9D9] to-[#737373] rounded-full'></div>
      </header>
      <div className='h-11 max-w-3xl py-6 mx-auto '>
        <div className='relative'>
          <div className='z-10 -mr-24 absolute top-[50%] translate-y-[-50%] left-3'>
            <Search />
          </div>
          <input
            className='w-full h-11 px-4 pl-10 text-balance bg-[#F5F5F5] border-[1.5px] border-[#E5E5E5] outline-0 rounded outline-none'
            placeholder='Search'
          />
        </div>
      </div>
    </>
  )
}
