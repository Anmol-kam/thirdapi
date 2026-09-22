import {useState} from 'react' 
import { FaLinkedin ,FaInstagram ,FaGithub ,FaBars } from "react-icons/fa"; 
import { IoMdClose } from "react-icons/io"; 
 
 
 
export default function Navbar() { 

  const[Open, setOpen] = useState(false); 

  return ( 
   <header className='m-5'> 
    <nav className='flex justify-between items-center py-3 px-20 bg-gray-800 text-white rounded-full'> 
 
        {/* left section */} 
        <h1 className='text-2xl font-bold'>AN</h1> 
 
 
        {/* centre section */} 
 
        <ul className='flex  hiddenmd:flex gap-15 '> 
            <li>All users</li> 
            <li>All projects</li> 
            <li>All Stocks</li> 
        </ul> 
 
        {/* right section */} 
        <ul className='flex gap-10'> 
            <li><FaLinkedin className='text-2xl' /></li> 
            <li><FaInstagram className='text-2xl' /></li> 
            <li><FaGithub className='text-2xl' /></li> 
        </ul> 
 
        <div onClick={()=> setOpen(!Open)} className='text-2xl  md:hidden '> 
             { 
                Open ? <FaBars/>:<IoMdClose /> 
 
             } 
        </div> 
    </nav> 
   </header> 
  ) 
}