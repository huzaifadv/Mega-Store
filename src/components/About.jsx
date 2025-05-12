import React from 'react'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import Features from './Features'

export default function About() {
  return (
    <>
      <div className="p-4 sm:ml-64 sm:mt-[70px] mt-[100px]">
        <div className="container mx-auto sm:mt-[180px] sm:mb-[220px] mt-[100px]">
          <div className='grid lg:grid-cols-[55%_auto] '>

            <div className='hero-text sm:pr-[200px] my-auto sm:ml-[30px]'>
              <h3 className='sm:text-[20px] text-[17px] font-[700] text-[#2661f4]'>Welcome to Mega Store!</h3>
              <h1 className='sm:text-[65px] text-[33px] font-[750] mt-[20px] text-[#fff] '>Everything You Need in One Place!</h1>
              <p className='sm:text-[19px] text-[15px] mt-[20px] text-[#787878]'>Your Mega Store shop for the latest watches, stylish accessories, and expert repair services. Enjoy unbeatable prices, top brands, and fast service all under one roof!</p>
              <button className='mt-[25px] btn-hero'><Link to="/shop" >Shop Now</Link></button>
            </div>

            <div className='text-center'>
              <Hero />
            </div>

          </div>
        </div>

        <Features />

      </div>
    </>

  )
}
