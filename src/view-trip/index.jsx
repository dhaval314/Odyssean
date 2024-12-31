import { useGoogleLogin } from '@react-oauth/google';
import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import { db } from "../service/firebaseConfig";
import { getDoc } from 'firebase/firestore';

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
    <div>
         
    </div>
  )
}

export default Viewtrip