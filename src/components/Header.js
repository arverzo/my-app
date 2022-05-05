import React from "react";
import Nav from "./Nav";

const logo = "./assets/shared/logo.svg";
export default function Header() {
  return (
    <div className="flex   justify-between relative  w-screen bg-transparent">
      {/* logo */}
      <div className=" pl-4 pt-4 flex items-center">
        {" "}
        <img src={logo} alt="logo pic" />
      </div>
      {/* navbar */}

      <Nav />
    </div>
  );
}
