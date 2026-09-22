import React from 'react'
import { FaLinkedin ,FaInstagram ,FaGithub } from "react-icons/fa";


export default function Navbar() {
  return (
   <header calassName='m-5'>
    <nav className='flex justify-between items-center p-5 bg-gray-800 text-white'>
        {/* left section */}
        <h1>AN</h1>
        {/* centre section */}

        <ul>
            <li>All users</li>
            <li>All projects</li>
            <li>All Stocks</li>
        </ul>

        {/* right section */}
        <ul>
            <li><FaLinkedin /></li>
            <li><FaInstagram /></li>
            <li><FaGithub /></li>
        </ul>
    </nav>
   </header>
  )
}
