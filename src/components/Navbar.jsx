import React from 'react'
// images
import search from '../../public/search.svg'
import menu from '../../public/menu.svg'
const Navbar = () => {
  return (
    <div className='h-[100px] w-full'>
        <div className="container flex flex-row justify-between items-center h-full">
            <div className="search">
                <img src={search} alt="" />
            </div>
            <div className="text-3xl text-center font-bold uppercase flex-1">
                Metavers
            </div>
            <img src={menu} alt="" />
        </div>
    </div>
  )
}

export default Navbar