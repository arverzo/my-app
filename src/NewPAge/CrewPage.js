import React, { useState, useEffect, useReducer } from "react";
import { crews } from "../components/Constant";

export default function CrewPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = [];
  ref[0] = React.createRef();
  ref[1] = React.createRef();
  ref[2] = React.createRef();
  ref[3] = React.createRef();

  const refText = [];
  refText[0] = React.createRef();
  refText[1] = React.createRef();
  refText[2] = React.createRef();
  refText[3] = React.createRef();

  const scrollToCrew = (index) => {
    setSelectedIndex(index);
    ref[index].current.scrollIntoView({});
  };
  return (
    // parent div
    <div
      className=" bg-mobile-crew  bg-center bg-cover bg-no-repeat 
      text-white h-screen lg:h-screen lg:bg-desktop-crew lg:bg-cover
    lg:bg-no-repeat lg:flex "
    >
      {/* meet our crew */}

      <div
        className="flex justify-center pt-[100px] font-barlow-condensed text-[20px] 
          lg:ml-[90px] lg:pt-[120px] lg:flex lg:justify-center  md:pt-[200px] "
      >
        <h3>
          <span className="text-gray-600">02</span> MEET YOUR CREW
        </h3>
      </div>
      {/* crew image carousel arnold*/}
      {/* flex  */}
      <div className="lg:flex lg:ml-10">
        <div className="lg:-mt-[150px] lg:ml-6">
          <div className="md:absolute md:mt-[300px]">
            <div className="flex overflow-x-hidden w-full ">
              {crews.map((crew, index) => (
                <div
                  ref={ref[index]}
                  className="w-full flex flex-shrink-0 justify-center items-center  lg:flex  lg:justify-center  "
                >
                  <img
                    className="w-[170px] md:order-last md:relative md:m-4 md:pt-[20px] md:w-[300px] md:h-[500]lg:absolute lg:ml-[200px] lg:w-[500px] lg:h-[500px] "
                    src={crew.photo}
                    alt={crew.name}
                  ></img>
                </div>
              ))}
            </div>
          </div>

          <div
            className="text-white flex justify-center text-[14px] font-barlow-condensed
            space-x-4 pt-[10px] md:order-1 md:absolute md:pt-[320px] md:pl-[330px] lg:pl-[50px] lg:mt-[150px]"
          >
            <div className=" flex space-x-4  md:pt-3 lg:pt-[250px] lg:-ml-[390px]">
              <button
                onClick={() => scrollToCrew(0)}
                class="bg-transparent hover:bg-white font-semibold  py-2 px-2 border border-white hover:border-transparent  rounded-full "
              ></button>
              <button
                onClick={() => scrollToCrew(1)}
                class="bg-transparent hover:bg-white font-semibold  py-2 px-2 border border-white hover:border-transparent  rounded-full"
              ></button>
              <button
                onClick={() => scrollToCrew(2)}
                class="bg-transparent hover:bg-white font-semibold  py-2 px-2 border border-white hover:border-transparent  rounded-full"
              ></button>
              <button
                onClick={() => scrollToCrew(3)}
                class="bg-transparent hover:bg-white font-semibold  py-2 px-2 border border-white hover:border-transparent  rounded-full"
              ></button>
            </div>
          </div>
        </div>

        {/*  crew position */}
        <div className="  lg:justify-center lg:hidden md:pt-[90px]">
          <div className="md:to-blue-600  md:absolute md:mb-[900px] md:ml-[100px] md:w-[592px] lg:mt-[300px]">
            <div className=" flex justify-center items-center  font-bellefair text-[16px] pt-[50px] text-gray-200">
              <div className="md:font-bellefair md:text-[24px]">
                <h3> {crews[selectedIndex].position} </h3>
              </div>
            </div>
            {/* crew name */}
            <div className=" flex  justify-center items-center font-bellefair text-[24px] md:font-bellefair md:text-[40px] lg:mr-[100px]">
              <div>
                <h1>{crews[selectedIndex].name} </h1>
              </div>
            </div>
            {/* crew description */}
            <div className=" flex justify-center items-center text-center font-barlow text-[15px] md:absolute ml-10 mr-10">
              <div>
                <p>{crews[selectedIndex].about}</p>
              </div>
            </div>
          </div>
        </div>
        {/* desktop enable */}
        <div className="px-8 mt-20 md:mt-0 text-center lg:text-left  lg:w-[800px] hidden lg:block lg:pt-[250px] lg:-ml-[240px]">
          <h1 className="Bellefair opacity-50 text-white tracking-wider uppercase md:text-xl lg:text-[32px]">
            {crews[selectedIndex].position}
          </h1>
          <h2
            className="Bellefair text-2xl md:text-4xl md:mt-2 mb-6 md:mb-4  text-white lg:text-[56px] mt-4 lg:mt-8 
          "
          >
            {crews[selectedIndex].name}
          </h2>
          <p className="text-primary Text text-base barlow md:px-28 mb-8 md:mb-14 lg:px-0 lg:w-2/3 lg:mt-12  ">
            {crews[selectedIndex].about}
          </p>
        </div>
      </div>
      {/* desktop enable */}
    </div>
  );
}
