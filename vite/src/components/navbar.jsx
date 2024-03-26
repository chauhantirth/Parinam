import React from 'react';
import { useState } from 'react';
import menu from '../assets/menu2.svg';
import close from '../assets/cross3.svg';

const navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar font-saira font-semibold text-[26px]'>
        <div className='ml-12'>
            <a className='hover:text-gray-500' href='#'>Home</a>
        </div>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className='mr-10'>
                <a className='hover:text-gray-500' href='https://rngpit.ac.in/'>Institute</a>
            </li>
            <li className='mr-10'>
                <a className='hover:text-gray-500' href='#'>About</a>
            </li>
            <li className='mr-10'>
                <a className='hover:text-gray-500' href='#'>Contact</a>
            </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} 
                alt="menu" 
                className='w-[28px] h-[28px] object-contain mx-6' 
                onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-[#E9F7FD] `}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    <li className='mb-10'>
                        <a className='hover:text-gray-500' href='https://rngpit.ac.in/'>Institute</a>
                    </li>
                    <li className='mb-10'>
                        <a className='hover:text-gray-500' href='#'>About</a>
                    </li>
                    <li className='mr-0'>
                        <a className='hover:text-gray-500' href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default navbar