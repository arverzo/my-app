import React, { useState, useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import { navList } from "./Constant";

function VerticalNavbar(props) {
  const path = useLocation().pathname;
  const [active, setActive] = useState("/");

  useEffect(() => {
    setActive(path);
  }, [path]);
  const [showMenu, toggle] = useReducer((showMenu) => !showMenu, false);

  return (
    <div className="w-[60%]  text-gray-300 z-1000  ">
      <div
        className={`${showMenu ? "hidden" : ""} pt-6 pr-4 flex justify-end `}
      >
        <img
          src="./assets/shared/icon-hamburger.svg"
          alt="hamburger"
          onClick={toggle}
        />
      </div>
      <div
        className={`
            ${!showMenu ? "hidden" : ""}
            w-[254px]
            backdrop-blur-[40px]
            bg-gray-600
           
            bg-opacity-25
            absolute top-0
            right-0
            h-screen
            pt-[38px]  pl-10 text-gray-300 md:visible  md:pt-0 md:flex md:flex-row md:h-[96px]
             md:w-[600px] md:justify-between  md:pr-[30px] z-[100]
            `}
      >
        <div className={` pt-6 pr-4 flex justify-end md:invisible`}>
          <img
            src="./assets/shared/icon-close.svg"
            alt="close icon"
            onClick={toggle}
          />
        </div>
        <div
          className={`${
            showMenu ? "" : "hidden"
          }  md:flex md:space-x-8 md:items-center`}
        >
          {props.navList.map((item) => (
            <div
              key={item.to}
              className={`h-12  flex items-center pl-[2px]   ${
                item.to === active
                  ? " transition ease-in-out delay-150 bg-transparent md:border-b  hover:-translate-y-1 hover:scale-110  hover:text-white   hover:font-bold hover:bg-transparent duration-300 ..."
                  : ""
              } `}
            >
              <Link to={item.to}> {item.title} </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <div className="w-screen flex justify-end">
      <VerticalNavbar navList={navList} />
    </div>
  );
}
