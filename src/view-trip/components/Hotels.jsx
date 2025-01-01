import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HotelCard from './HotelCard';

function Hotels({ trip }) {
  const hotelOptions = trip?.tripData?.hotelOptions || [];
  // Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div>
      <h2 data-aos="fade-up" className=" underline font-bold mt-5 text-xl">Hotel Recommendations:</h2>
      {hotelOptions.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {hotelOptions.map((hotel, index) => (
            <HotelCard hotel={hotel} index={index}/> 
          ))}
        </div>
      ) : (
        <p>No hotel recommendations available.</p>
      )}
    </div>
  );
}

export default Hotels;
