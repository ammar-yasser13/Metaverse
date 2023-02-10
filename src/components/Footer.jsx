import React from 'react'
import headset from '../../public/headset.svg'
const Footer = () => {
    const date = new Date()
  return (
    <footer className=''>
        <div className="container p-8 flex flex-col justify-start text-center lg:text-start lg:flex-row lg:justify-between items-center gap-10 lg:gap-0">
            <h2>Enter the Metaverse</h2>
            <div className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
                <img src={headset} alt="" />
                Enter Metaverse
            </div>
        </div>
        <div className="container flex flex-row justify-between items-center h-[100px] border-t-2 border-[#6A6A6A]">
            <div className="text-3xl text-center font-bold uppercase">Metaverus</div>
            <p>Copyright &copy; 2022 - {date.getFullYear()} Metaversus. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer