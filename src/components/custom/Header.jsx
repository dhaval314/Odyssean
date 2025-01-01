import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { Navigation } from "lucide-react";

function Header() {
  const location = useLocation();
  const user=JSON.parse(localStorage.getItem('user'));

  useEffect(()=>{
    console.log(user);
  },[])

  return (
    <>
        <div className="w-full bg-[url('/hero.jpg')] bg-cover bg-no-repeat z-21 p-3 shadow-sm flex justify-between items-center px-5">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
          <div>
           {user?
           <div>
            <Button onClick={()=>{
              googleLogout();
              localStorage.clear();
              window.location.reload();
            }} variant="outline" className='rounded-full'>Logout</Button>
            </div>:
            <Button >Get Started</Button>}
      
          </div>
        </div>
        <div className="pointer-events-none inset-0 bg-black bg-opacity-20"></div>
    </>
  );
}

export default Header;
