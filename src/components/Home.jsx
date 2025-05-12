import React from 'react'

import CardClient from './CardClient'
import Products from './Products'
import Footer from './Footer'
import Carousel from './Carousel'
import Navbar from './Navbar'


export default function Home() {

    
    return (
        <>  
             <Navbar/>
             
            <div className="p-4 sm:ml-64 sm:mt-[100px] mt-[120px]">
               <Carousel />
            </div>
             
            <div className="p-4 sm:ml-64 sm:mt-[20px] mt-[-140px]">
            <CardClient />
            </div>

            <div className="p-4 sm:ml-64 sm:mt-[20px] mt-[-50px]">
             <Products />
            </div>

             <Footer />
  
        </>
    )
}
