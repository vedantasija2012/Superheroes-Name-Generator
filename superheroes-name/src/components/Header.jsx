import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-purple-500 text-white px-3 h-24'>
        <ul className='h-24 flex items-center'>
            <li className='px-4'><Link className='text-lg cursor-pointer hover:underline' to="/">Home</Link></li>
            <li className='px-4'><Link className='text-lg cursor-pointer hover:underline' to="/about">About</Link></li>
            <li className='px-4'><Link className='text-lg cursor-pointer hover:underline' to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Header