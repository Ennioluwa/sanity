import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className=" mx-auto flex max-w-7xl items-center justify-between p-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            alt="logo"
            className=" w-32 cursor-pointer object-contain sm:w-44"
          />
        </Link>
        <div className=" hidden items-center gap-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className=" rounded-full bg-green-600 py-1 px-4 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className=" flex items-center gap-5">
        <h3 className=" text-green-600 ">Sign In</h3>
        <h3 className=" rounded-full border border-green-600 px-4 py-1 text-green-600">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Navbar
