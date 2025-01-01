import React from 'react'
import { useEffect,useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { GetPlaceDetails } from '@/service/GlobalAPI';

const PHOTO_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY

function InfoSection({trip}) {

  const[photoUrl,setphotoUrl]=useState();

  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location
    }
    const result = await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[5].name)

      const PhotoUrl=PHOTO_URL.replace('{NAME}',resp.data.places[0].photos[2].name);
      console.log(PhotoUrl);
      setphotoUrl(PhotoUrl);
    })
  }

  return (
    <div>
        <img className='h-[340px] w-full object-cover rounded-2xl' src={photoUrl }/>

        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
            <div className='flex gap-5'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>{trip.userSelection?.noOfDays} Day(s)</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>Budget: {trip.userSelection?.budget}</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>For: {trip.userSelection?.traveler}</h2>
            </div>
        </div>
    </div>
  )
}

export default InfoSection
