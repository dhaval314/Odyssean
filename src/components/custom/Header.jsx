import React from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <>
        <div className="w-full bg-[url('/hero.jpg')] bg-cover bg-no-repeat z-21 p-3 shadow-sm flex justify-between items-center px-5">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
        <div className="pointer-events-none inset-0 bg-black bg-opacity-20"></div>
    </>
  );
}

export default Header;
