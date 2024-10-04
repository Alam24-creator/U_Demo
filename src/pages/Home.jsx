import React from 'react'
import Hero from "../components/Hero"
import Places from '../components/Places'
import BannerImg from '../components/BannerImg'
import Poster from "../assets/cover.png"
import Poster2 from "../assets/travel2.png"
import Blogs from './Blogs'
import Banner from '../components/Banner'
import Testimonial from "../components/Testimonial.jsx"
import BlogComp from "../components/BlogComp"
const Home = () => {
  return (
    <>
    <div>
      <div className=' relative h-[780px]'>
        <img  src='src/assets/kaaba.jpg' className='absolute right-0 top-0 w-full h-[780px] object-cover z-[-1]'>
            
        </img>
        <Hero/>
      </div>
      <Places></Places>
      <BannerImg img={Poster}/>
      <BlogComp/>
      <Banner/>
      <BannerImg img={Poster2}/>
      <Testimonial/>   
      </div>
    </>
  )
}

export default Home
