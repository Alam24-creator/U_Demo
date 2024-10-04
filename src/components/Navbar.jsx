import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  FaCaretDown } from "react-icons/fa"
import {  HiMenuAlt3,HiMenuAlt1 } from "react-icons/hi"
import ResponsiveMenu from './ResponsiveMenu'

const dropdownlink=[
    {
        name:"Package 1",
        link:"/package1"
    },
    {
        name:"Package 2",
        link:"/package2"
    },
    {
        name:"Package 3",
        link:"/package3"
    },

];
const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)

    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    };
  return (
    <>
      <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]'>
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className='container py-[2px] sm:block hidden'>
            <div className="flex justify-between">
            <p>logo</p>
            <p>Phone: +91 7317-853933</p>
        </div>
        </div>
        </div>
        <div className="container py-3 sm:py-0">
            <div className='flex justify-between items-center'>
                <div>
                    <Link to="/" onClick={()=>{window.scrollTo(0,0),smooth}}>
                        <img src="./src/assets/image copy.png" className='h-16'></img>
                    </Link>
                </div>
                <div className='hidden sm:block'>
                    <ul className='flex items-center gap-6'>
                        <li className='py-4'>
                            <NavLink to="/" activeclassname="active" onClick={()=>{window.scrollTo(0,0)}}>Home</NavLink>
                        </li>
                        <li className='py-4'>
                            <NavLink to="/blogs" activeclassname="active" onClick={()=>{window.scrollTo(0,0)}}>Blogs</NavLink>
                        </li>
                        <li className='py-4'>
                            <NavLink to="/places" activeclassname="active" onClick={()=>{window.scrollTo(0,0)}}>Places</NavLink>
                        </li>
                        <li className='py-4'>
                            <NavLink to="/about" activeclassname="active" onClick={()=>{window.scrollTo(0,0)}}>About</NavLink>
                        </li>
                        {/* dropdown */}
                        <li className='py-4 relative group cursor-pointer'>
                            <div  className='dropdown flex items-center'>
                                <span>
                                    Packages
                                </span>
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'></FaCaretDown>
                                </span>
                            </div>
                            <div className='absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                                <ul>
                                    {dropdownlink.map((data)=>{
                                        return(
                                        <li key={data.name}>
                                            <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20' href={data.link}>{data.name}</a>
                                        </li>);

                                    })}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full'>Book Now</button>
                    {/* mobile hamburger */}
                    <div className='md:hidden block'>
                        {showMenu?(
                            <HiMenuAlt1 onClick={toggleMenu}
                             className="cursor-pointer transition-all" size={30}/>
                            ):(
                                <HiMenuAlt3 onClick={toggleMenu}
                             className="cursor-pointer transition-all" size={30}/>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} ></ResponsiveMenu>
      </div>
    </>
  )
}

export default Navbar
