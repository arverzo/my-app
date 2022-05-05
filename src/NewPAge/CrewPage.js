import React, { useState, useEffect, useReducer } from "react";
export const crews = [
  {
    id: "01",
    position: "COMMANDER",
    name: "DOUGLAS HURLEY",
    about:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    photo: "/assets/crew/image-douglas-hurley.png",
  },
  {
    id: "02",
    position: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    about:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    photo: "/assets/crew/image-mark-shuttleworth.webp",
  },
  {
    id: "03",
    position: "PILOT",
    name: "VICTOR GLOVER",
    about:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    photo: "/assets/crew/image-victor-glover.webp",
  },
  {
    id: "04",
    position: "FlIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    about:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    photo: "/assets/crew/image-anousheh-ansari.webp",
  },
];

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
    ref[index].current.scrollIntoView({
      // behavior: "smooth",
      // block: "nearest",
      // inline: "start",
    });
  };
  return (
    // parent div
    <div
      className=" bg-mobile-crew  bg-center bg-cover bg-no-repeat 
      text-white h-screen lg:h-screen lg:bg-desktop-crew lg:bg-cover
    lg:bg-no-repeat lg:flex "
    >
      {/* meet our crew */}
      <div>
        <div
          className="flex justify-center pt-[100px] font-barlow-condensed text-[16px] 
          lg:ml-[90px] lg:pt-[120px] lg:flex lg:justify-center "
        >
          <h3>
            <span className="text-gray-600">02</span> MEET YOUR CREW
          </h3>
        </div>
        {/* crew image carousel arnold*/}
        {/* flex  */}
        <div className="md:absolute md:mt-[300px]">
          <div className="flex overflow-x-hidden w-full ">
            {crews.map((crew, index) => (
              <div
                ref={ref[index]}
                className="w-full flex flex-shrink-0 justify-center items-center  lg:flex  lg:justify-center lg:mb-10 "
              >
                <img
                  className="w-[170px] md:order-last md:relative md:m-4 md:w-[300px]lg:absolute lg:ml-[300px] lg:w-[554px] lg:h-[200px] "
                  src={crew.photo}
                  alt={crew.name}
                ></img>
              </div>
            ))}
          </div>
        </div>

        <div
          className="text-white flex justify-center text-[14px] font-barlow-condensed
            space-x-4 pt-[10px] md:order-1 md:absolute md:pt-[300px] md:pl-[330px] lg:mt-[150px]"
        >
          <div className=" flex space-x-4 ">
            <button
              onClick={() => scrollToCrew(0)}
              class="bg-transparent hover:bg-white font-semibold  py-2 px-2 border border-white hover:border-transparent  rounded-full"
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
      <div className="md:to-blue-600  md:absolute md:mb-[900px] md:ml-[100px] md:w-[592px] lg:mt-[300px]">
        <div className=" flex justify-center items-center  font-bellefair text-[16px] pt-[50px] text-gray-200">
          <div className="md:font-bellefair md:text-[24px] lg:mr-[350px]">
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
        <div className=" flex justify-center items-center text-center font-barlow text-[15px] md:absolute">
          <div>
            <p>{crews[selectedIndex].about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
