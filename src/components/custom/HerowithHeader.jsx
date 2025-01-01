import React, { useEffect } from "react";
import { BrowserRouter, Link } from 'react-router-dom'
import { Button } from '../ui/button'
import Aos from "aos";
import 'aos/dist/aos.css'

const HeroWithHeader = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      ></div>

      {/*Overlay*/}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/*Header*/}  
      <header className="absolute w-full border-none z-20">
      <div className='p-3 shadow-sm flex justify-between item-center px-5 border-none'>
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </Link>
        
          {/* <Button >Sign In</Button> */}
        
      </div>
      </header>

      {/* Hero*/}
      <div data-aos="fade-up" className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Plan Your Dream Trip</h1>
        <p className="text-lg md:text-2xl mb-8">
          Start your journey with AI-powered personalized itineraries.
        </p>
        <Link to="/create-trip"><Button>
          Get Started
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroWithHeader;
