import React from 'react'
import { Link } from 'react-router-dom';

const NavbarLinks=[
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/about"
    },
    {
        name:"Places",
        link:"/places"
    },
    {
        name:"Blogs",
        link:"/blogs"
    },

];

const ResponsiveMenu = ({showMenu,setShowMenu}) => {
  return (
    <div className={`${showMenu? "left-0" : "-left-[100%]"}
      fixed bottom-0 top-0 z-20 flex h-screen w-[75%] 
      flex-col justify-between bg-white dark:bg-gray-700
      dark:text-white px-8 pb-6 pt-16 text-black transition-all 
      duration-200 md:hidden rounded-r-xl shadow-md `}>

      <div className='Navbar_card'>
        <div className='text-white mt-12 font-bold'>
        <ul className='space-y-4 text-xl'>
            {NavbarLinks.map(({name,link})=>(
                <li key={name}>
                    <Link to={link}
                    onClick={()=>setShowMenu(false)}
                    className="mb-6 inline-block">{name}</Link>
                </li>
            ))}
        </ul>
        </div>

      </div>
    </div>
  )
}

export default ResponsiveMenu
