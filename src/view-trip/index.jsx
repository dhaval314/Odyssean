import { useGoogleLogin } from '@react-oauth/google';
import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import { db } from "../service/firebaseConfig";
import { getDoc } from 'firebase/firestore';
import InfoSection from './components/InfoSection'; 
import Hotels from './components/Hotels';
import Itinernary from './components/Itinernary';

function Viewtrip() {
    const{tripId} = useParams();
    const [trip,setTrip]=useState([]);

    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId])

    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId)
        const docSnap=await getDoc(docRef)

        if(docSnap.exists()){
            console.log("Document:",docSnap.data());
            setTrip(docSnap.data())
        }
        else{
            console.log("no such document");
            toast('No Trip Found')
        }
    }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
         <InfoSection trip={trip} />
         <Hotels trip={trip}/>
         <Itinernary trip={trip}/>
    </div>     
  )
}

export default Viewtrip