import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className=" bg-mobile-home bg-center bg-cover bg-no-repeat md:pt-[50px] lg:block lg:block-col
     lg:bg-desktop-home lg:bg-cover lg:no-repeat h-screen lg:h-screen"
    >
      {/* parent div */}
      <div className="h-full flex flex-col justify-between py-20 ">
        {/* text div */}

        <div className="text-white  pt-[120px] h-2/3    md:pt-[80px]  ">
          <div className="flex justify-center lg:block">
            <h3 className="text-[16px] font-barlow-condensed md:font-barlow-condensed md:text-[20px]  lg:pl-[80px]">
              SO, YOU WANT TO TRAVEL TO
            </h3>
          </div>
          <div className=" flex justify-center lg:block">
            <h1 className="text-[80px] font-bellefair md:text-[150px] md:font-bellefair lg:pl-[70px] ">
              SPACE
            </h1>
          </div>
          <div className=" flex justify-center ml-10 mr-10 text-center pt-[30px] lg:block">
            <p className=" text-[15px] md:text-[16px] lg:text-[18px]  font-barlow-condensed md:text-center md:w-[444px] md:h-[112px]  lg:block ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>

        {/* Explore div */}
        <div
          className="flex justify-center md:justify-center md:pb-[120px]  text-gray-800 lg:ml-[800px] 
         lg:absolute lg:mt-[170px] lg  "
        >
          <div
            className=" flex justify-center  hover:bg-opacity-25 hover:bg-gray-50 rounded-full w-[200px] h-[200px] 
          md:w-[300px] md:h-[300px] "
          >
            <div
              className="bg-white  h-40 w-40 rounded-full flex items-center justify-center mt-5 md:w-[242px] 
            md:h-[242px] md:text-[32px] md:font-bellefair md:mt-[30px]"
            >
              <Link to="/destination">EXPLORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
