import React from 'react'
import {IoArrowDownOutline} from "react-icons/io5"
import headset from "../../public/headset.svg"
import planet1 from "../../public/planet-04.png"
import planet2 from "../../public/planet-05.png"
import planet3 from "../../public/planet-06.png"
import planet4 from "../../public/planet-07.png"
import planet5 from "../../public/planet-08.png"
import planet6 from "../../public/planet-09.png"
import imageRow from '../../public/get-started.png'
import imageWhatNew from '../../public/whats-new.png'
import vrpeno from '../../public/vrpano.svg'
import map from '../../public/map.png'
const About = () => {
    const cards = [
        {
            img: planet1,
            text: "the Hogwarts"
        },
        {
            img: planet2,
            text: "the Upside Down"
        },
        {
            img: planet3,
            text: "Kadirojo Permai"
        },
        {
            img: planet4,
            text: "Paradise Island"
        },
        {
            img: planet5,
            text: "Hawkins Labs"
        },
    ]
    const blog = [
        {
            img: planet2,
            title: "The launch of the Metaverse makes Elon musk ketar-ketir",
            text: "Magna etiam tempor orcieu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
        },
        {
            img: planet4,
            title: "7 tips to easily master the madness of the Metaverse",
            text: "Vitae congue eu consequat ac felis donec. Et magnis disparturient montes nascetur ridiculus mus. Convallis tellus id interdum",
        },
        {
            img: planet3,
            title: "With one platform you canexplore the whole world virtually",
            text: "Quam quisque iid diam vel quam elementum. viverra nam libero justo laoreet sit amet cursus sit. mauruis in aliquam sem",
        },
    ]
    const handleActiveCard =  (card) => {
        if (card.target.parentElement.classList.contains('active')) {
            card.target.parentElement.classList.remove('active')
            card.target.parentElement.classList.add('unActive')
        }else {
            card.target.parentElement.classList.remove('unActive')
            card.target.parentElement.classList.add('active')
        }
    }
  return (
    <section className='about py-16 md:pt-64'>
        <div className="container">
            <p className='text-3xl leading-10 font-medium text-center'><b>Metaverse</b> a new thing in the future, where you can evjoy the virtual world by felling like it's really rel, ou can fee what you feel what you feel in this metaverse world, because this is really the <b>madness of the metaverse</b> of today, using only <b>VR</b> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <b>explore</b> the madness of the metaverse by your dreams into realit. Let's explore the madness of the metaverse by scrolling down</p>
            <div className="arrowDown flex flex-row justify-center items-center p-10">
                <IoArrowDownOutline  size={50}/>
            </div>
        </div>
        <div className="container  py-16py-40">
            <h2 className='text-center'>Choose the world you want to explore</h2>
            <div className="cards pt-20 w-full flex flex-col justify-start items-stretch lg:text-start text-center  lg:flex-row lg:justify-between lg:items-center gap-10">
                {
                    cards.map((card,index) => (
                        <div onClick={handleActiveCard} key={index} className="card relative overflow-hidden lg:w-[200px] lg:h-[500px] rounded-3xl">
                            <img src={card.img} className='rounded-3xl w-full h-full object-cover' alt="" />
                            <div className="content w-full p-4 absolute bottom-0 left-0 !flex flex-col justify-start items-center lg:items-start gap-3">
                                <div className="icon hidden p-6 w-fit rounded-3xl glassmorphism"><img src={headset} alt="" /></div>
                                <p className='uppercase hidden'>Enter Metaverse</p>
                                <h3 className='lg:rotate-[-90deg] lg:w-1/2 w-full'>{card.text}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="container py-16 md:py-40 flex flex-col justify-start items-stretch gap-12 text-start lg:flex-row lg:justify-between lg:items-center">
            <div className="image lg:w-[50%]">
                <img src={imageRow} className="w-full" alt="get started" />
            </div>
            <div className="content flex flex-col justify-start items-start gap-8 lg:w-[50%]">
                <h2>Get started withjust a few clicks</h2>
                <div className="row flex flex-col gap-8">
                    <div className="list flex flex-row justify-start items-center gap-7">
                        <div className="count text-lg font-bold bg-[#323F5D] py-6 px-8 rounded-3xl">01</div>
                        <p className=''>Finde a world that suits you and you want to enter</p>
                    </div>
                    <div className="list flex flex-row justify-start items-center gap-7">
                        <div className="count text-lg font-bold bg-[#323F5D] py-6 px-8 rounded-3xl">02</div>
                        <p>Enter the world by reading basmalah to be safe</p>
                    </div>
                    <div className="list flex flex-row justify-start items-center gap-7">
                        <div className="count text-lg font-bold bg-[#323F5D] py-6 px-8 rounded-3xl">03</div>
                        <p>No need to beat around the bush,just stay on the gas and have fun</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container py-16 md:p-40 flex flex-col justify-start items-stretch gap-12 text-start lg:flex-row lg:justify-between lg:items-center">
            <div className="content flex flex-col justify-start items-start gap-16 lg:w-[50%]">
                <h2>what's new about Metaversus?</h2>
                <div className="row flex flex-col justify-start items-stretch text-start md:flex-row md:justify-start md:items-start gap-10">
                    <div className="col flex flex-col justify-start items-start gap-6">
                        <div className="icon  bg-[#323F5D] p-5 rounded-3xl"><img src={vrpeno} className='w-[40px]' alt="" /></div>
                        <h3>Title A new world</h3>
                        <p>We have the latest update with new world for you to try never mind</p>
                    </div>
                    <div className="col flex flex-col justify-start items-start gap-6">
                        <div className="icon bg-[#323F5D] p-5 rounded-3xl"><img src={headset} className='w-[40px]' alt="" /></div>
                        <h3>Title More realistic</h3>
                        <p>In the latest update, your eyes are narrow, making the world more realistic than ever</p>
                    </div>
                </div>
            </div>
            <div className="image lg:w-[50%]">
                <img src={imageWhatNew} className="w-full" alt="" />
            </div>
        </div>
        <div className="container py-16 md:py-40 flex flex-col justify-start items-stretch text-center gap-16">
            <h2>Trackfriends around you and invite them to play together in the same world</h2>
            <img src={map} alt="" />
        </div>
        <div className="container py-16 md:py-40 flex flex-col justify-center items-center gap-[100px]">
            <h2 className='text-center'>Insight about metaverse</h2>
            <div className="blog flex flex-col justify-start items-center gap-16">
                {
                    blog.map((blog,index) => (
                        <div key={index} className="flex flex-col lg:flex-row justify-center gap-10 items-stretch text-center lg:text-start lg:items-center lg:h-[250px]">
                            <div className="image h-[300px] lg:h-full lg:w-[30%] overflow-hidden rounded-3xl">
                                <img src={blog.img} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="content flex flex-col justify-start items-start gap-4 lg:w-[70%]">
                                <h3 className='font-normal text-4xl'>{blog.title}</h3>
                                <p>{blog.text}</p>
                            </div>
                            <div className="link hidden lg:block p-8 border rounded-full rotate-[-45deg]">
                                <a href="" className=''><IoArrowDownOutline  size={50} /></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="container my-16 md:my-40 h-fit lg:h-[600px] flex flex-col lg:flex-row justify-center lg:items-center justify-content-center items-stretch gap-8">
            <div className="content gap-5 w-full lg:h-full lg:w-[40%] gradient-01 border border-[#6A6A6A] p-8 rounded-3xl h-fit flex flex-col justify-end items-stretch text-center lg:text-start">
                <h3>Samantha</h3>
                <p>Founder Metaverus</p>
                <p className='text-white text-3xl leading-10'>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
            </div>
            <div className="image w-full lg:w-[60%] h-[300px] lg:h-full overflow-hidden rounded-3xl"><img src={planet6} className="w-full h-full object-cover" alt="" /></div>
        </div>
    </section>
  )
}

export default About