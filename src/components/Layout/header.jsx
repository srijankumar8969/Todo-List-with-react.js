import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <>
      <div className="navigator bg-blue-500 flex justify-between h-[50px]">
        <div>
        <h1 className='pt-3 font-bold'>SrijanWeb</h1>
        </div>
        <ul className='flex flex-row gap-3'>
          <li>
          <NavLink to='/' className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b  border-gray-100 ${isActive? "text-orange-700" : "text-gray-700" } hover:bg-transparent border-0 hover:text-orange-700 `}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/About' className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700" } hover:bg-transparent border-0 hover:text-orange-700 p-0`}>
            About
            </NavLink>
            </li>
          <li>
          <NavLink to='/Services' className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700" } hover:bg-transparent border-0 hover:text-orange-700 p-0`}>Services</NavLink></li>
          <li>
          <NavLink to='/Products' className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700" } hover:bg-transparent border-0 hover:text-orange-700 p-0`}>Products</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Header