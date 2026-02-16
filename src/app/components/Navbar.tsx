'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const navItems = [
    { link: "About", path: "/about", color: "#FF4375" },
    { link: "Our Work", path: "#our-work", color: "#34B8FF" },
    { link: "Creative Studio", path: "/creative", color: '#BF62FF' },
    { link: "Digital Marketing", path: "/marketing", color: "#FF4375" },
    { link: "The World on the Street", path: "#", color:"#34B8FF" },
    { link: "Contact", path: "#", color: "#FF4375" },
  ]

  return (
    <>
      <nav className='fixed bg-black w-full h-22 top-0 left-0  z-50  bg-opacity-70'>
        <div className='flex items-center h-full px-4 justify-between w-full'>
            {/* Logo */}
          <h3 className='text-white font-bold text-xl md:text-2xl lg:text-3xl cursor-pointer'>
            HSN<span className='text-[#9CA3AF]'>Design</span>
          </h3>
                {/* Menu button */}
          <button
            onClick={() => setOpen(!open)}
            className='text-3xl text-white cursor-pointer'
          >
            <IoMdMenu />
          </button>
        </div>

        <div
         className={`fixed top-0 right-0 h-full w-full md:w-1/2 bg-white text-black transform transition-transform duration-300
${open ? "translate-x-0" : "translate-x-full"}`}

        >
          <div className="flex justify-end p-8">
            <button onClick={() => setOpen(false)} className="text-3xl">
              <IoMdClose className='cursor-pointer'/>
            </button>
          </div>
          <hr className='bg-black w-full -mt-1.5' />

                {/* Menu navlinks */}
          <ul className="flex flex-col gap-6 p-6 text-right items-end h-screen text-2xl md:text-4xl font-extrabold">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = item.color
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = "black"
                  }}
                  className="transition"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
