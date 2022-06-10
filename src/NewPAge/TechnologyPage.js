import React, { useState, useEffect, useReducer } from "react";
import { technologies } from "../components/Constant";

export default function TechnolohyPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = [];
  ref[0] = React.createRef();
  ref[1] = React.createRef();
  ref[2] = React.createRef();

  const refText = [];
  refText[0] = React.createRef();
  refText[1] = React.createRef();
  refText[2] = React.createRef();

  const scrollToTechnology = (index) => {
    setSelectedIndex(index);
    ref[index].current.scrollIntoView({
      // behavior: "smooth",
      // block: "nearest",
      // inline: "start",
    });
  };

  return (
    // parent div
    <div className=" text-white bg-mobile-technology  bg-center bg-cover bg-no-repeat h-screen  md:bg-tablet-technology md:w-screen  md:h-screen  lg:bg-desktop-technology">
      {/* space launch 101 */}
      <div className="flex justify-center pt-[100px] font-barlow-condensed text-[16px] md:mr-[500px] md:pt-[130px] md:text-[20px] md:ml-10 lg:pr-[400px]">
        <div>
          <h1>
            <span className="text-gray-500">03 </span>SPACE LAUNCH 101
          </h1>
        </div>
      </div>
      {/* image of spacecraft */}

      <div className=" md:mt-[30px] md:w-full ">
        <div className="flex overflow-x-hidden w-full ">
          {technologies.map((technology, index) => (
            <div
              ref={ref[index]}
              className="w-full flex flex-shrink-0 justify-center items-center  lg:flex  lg:justify-center   "
            >
              <img
                className="w-full md:order-last md:w-full  md:m-4 md:pt-[20px]  md:h-[500]  lg:hidden "
                src={technology.landscape}
                alt={technology.name}
              ></img>
              {/* desktop enable  */}
              <img
                className="w-full md:order-last md:w-full  md:m-4 md:pt-[20px]  md:h-[500] lg:ml-[700px]  lg:pl-6    lg:w-[600px] lg:h-[500px] 
                md:hidden  hidden lg:block lg:-mt-[100px] "
                src={technology.portrait}
                alt={technology.name}
              ></img>{" "}
              {/* desktop enable  */}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-center pt-20  lg:flex lg:flex-col  ">
          <div className=" flex space-x-4  lg:flex lg:flex-col lg:px-5 lg:ml-[100px] lg:-mt-[400px]  lg:pb-[100px]">
            <div className="lg:m-2">
              <button
                onClick={() => scrollToTechnology(0)}
                class="bg-transparent hover:bg-white font-semibold  py-4 px-6 border border-white hover:border-transparent hover:text-black rounded-full 
               lg:w-[70px] lg:h-[70px] lg:ml-2 "
              >
                1
              </button>
            </div>
            <div className="lg:m-2">
              <button
                onClick={() => scrollToTechnology(1)}
                class="bg-transparent hover:bg-white font-semibold  py-4 px-6  border border-white hover:border-transparent hover:text-black rounded-full 
              lg:w-[70px] lg:h-[70px] "
              >
                2
              </button>
            </div>
            <div className="lg:m-2">
              <button
                onClick={() => scrollToTechnology(2)}
                class="bg-transparent hover:bg-white font-semibold py-4 px-6 border border-white hover:border-transparent hover:text-black rounded-full 
              lg:w-[70px] lg:h-[70px] "
              >
                3
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:to-blue-600   md:mb-[900px] md:w-[592px] lg:hidden  ">
        <div className="font-barlow-condensed text-[14px] flex justify-center md:text-[16px]  md:ml-[150px] text-gray-400 pt-10 ">
          <div>
            <h3> THE TERMINOLOGY... </h3>
          </div>
        </div>

        <div className="flex justify-center  text-[24px] md:text-[40px]  font-bellefair md:ml-[150px] ">
          <div>
            <h1>{technologies[selectedIndex].name}</h1>
          </div>
        </div>

        <div className="flex justify-center text-center text-[15px] font-barlow md:w-[573px] md:text-[16px] md:h-[84px] md:ml-[90px] ml-10 mr-10 ">
          <div>
            <p>{technologies[selectedIndex].about}</p>
          </div>
        </div>
      </div>
      {/* desktop enable */}
      <div className=" hidden lg:block lg:-mt-[400px] lg:ml-[250px] lg:w-[400px] lg:text-left  ">
        <h3 className="lg:pt-10"> THE TERMINOLOGY... </h3>

        <h1 className="Bellefair opacity-50 text-white lg:text-[56px] lg:pt-[10px] lg:w-[600px] ">
          {technologies[selectedIndex].name}
        </h1>
        <h2
          className="Bellefair   text-white lg:text-[15px] mt-4  lg:tracking-tighter lg:mt-[10px]
          "
        >
          {technologies[selectedIndex].about}
        </h2>
      </div>
      {/* desktop enable */}
    </div>
  );
}
