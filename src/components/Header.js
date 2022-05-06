import React from "react";
import Nav from "./Nav";

const logo = "./assets/shared/logo.svg";
export default function Header() {
  return (
    <div className="flex   justify-between relative  w-screen bg-transparent">
      {/* logo */}
      <div className=" pl-4 pt-4 flex items-center">
        <img src={logo} alt="logo pic" />
        <hr className="lg:border-[1px] lg:w-[500px] lg:ml-[180px] lg:mt-5 lg:absolute lg:border-gray-400"></hr>
      </div>
      {/* navbar */}

      <Nav />
    </div>
  );
}
