import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex items-center gap-9 flex-col relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('/hero.jpg')" }}>
        
        <h1 className='font-extrabold text-[60px] text-center mt-20'>Where Your Dream Trips Begin</h1>
        <h6 className='text-gray-500 text-[20px] text-center'>Effortlessly plan unforgettable journeys with the power of AI. Every detail customized, just for you.</h6>
        <div className='space-x-1'>
        <Link to={'/create-trip'}>
        <Button>Plan My Trip</Button>
        </Link >
        <Button>Find Destinations</Button>
        </div>
    </div>
  )
}

export default Hero