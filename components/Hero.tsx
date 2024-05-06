import React from 'react'
import Image from 'next/image'
import { Button } from 'flowbite-react';

const Hero = () => {
    return (
    <div className="bg-cover bg-center h-3/4" style={{backgroundImage: "url(/bg-main.webp)"}}>
    <section className="flexBetween max-container padding-container relative z-30 px-12 py-4"> 
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="px-5 col-span-1 lg:col-span-6 content-center justify-left" >
            <h1 className="text-white mb-2 text-xl lg:text-4xl font-extrabold">
              Transform your waste
            <br></br>
              into income
            </h1>
            <div>
            <Button pill gradientDuoTone="purpleToBlue">Contact Us</Button>
            </div>
          </div>
          <div className="px-5 col-span-1 lg:col-span-6">
            <Image 
              src="/main_renie.png"
              alt="dummy"
              width={320}
              height={320}
              className="inline-block cursor-pointer"
            />
          </div>
      </div>

    </section>
    </div>
  )
}

export default Hero

