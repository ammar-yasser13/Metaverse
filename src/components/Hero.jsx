import React from 'react'
import heroImage from '../../public/cover.png'
const Hero = () => {
  return (
    <section className='hero py-8 overflow-hidden'>
        <div className="container-fluid flex flex-col justify-center items-center gap-5">
            <h1 className='uppercase text-[56px] md:text-[96px] md:leading-[100px]  lg:text-[144px] lg:leading-[150px] relative z-20'>Metaverse <br /> Madness</h1>
            <div className="cover w-full h-[500px] relative translate-x-[50px] lg:translate-x-[150px] ">
                <div className='gradient-02 w-full h-[350px] rounded-tl-[150px] absolute top-[-40px] z-10'></div>
                <img src={heroImage} alt="hero img" className='h-full relative z-20 rounded-tl-[150px] w-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default Hero