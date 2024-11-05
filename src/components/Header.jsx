import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"INTER COMMUNITY",link:"/international-community"},
        {name:"ABOUT",link:"/about"},
        {name:"REACH US",link:"/reach-us"},
        {name:"ATTENDUS",link:"/attendus"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 '>
           <div className='md:flex items-center justify-between bg-blue-600 py-4 md:px-10 px-7'>
            {/* logo section */}
            <a href='/' className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
               <BookOpenIcon className='w-7 h-7 text-black'/>
               <span>IRC</span>
            </a>
            {/* Menu icon */}

            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon className='text-white'/> : <Bars3BottomRightIcon className='text-white' />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static sm:bg-blue-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-white hover:border-b-2 hover:text-black duration-500'>{link.name}</a>
                    </li>))
                }
                {/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button> */}
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;