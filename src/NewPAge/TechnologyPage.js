import React, { useState, useEffect, useReducer } from "react";

export const technologies = [
  {
    id: "01",
    name: "LAUNCH VEHICLE",
    about:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
  },
  {
    id: "02",
    name: "SPACEPORT",
    about:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    landscape: "/assets/technology/image-spaceport-landscape.jpg",
    portrait: "/assets/technology/image-spaceport-portrait.jpg",
  },
  {
    id: "03",
    name: "SPACE CAPSULE",
    about:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    landscape: "/assets/technology/image-space-capsule-landscape.jpg",
    portrait: "/assets/technology/image-space-capsule-portrait.jpg",
  },
];

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
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    // parent div
    <div className=" text-white bg-mobile-technology  bg-center bg-cover bg-no-repeat h-screen ">
      {/* space launch 101 */}
      <div className="flex justify-center pt-[100px] font-barlow-condensed text-[16px]">
        <div>
          <h1>
            <span className="text-gray-500">03 </span>SPACE LAUNCH 101
          </h1>
        </div>
      </div>
      {/* image of spacecraft */}

      <div className="flex overflow-x-hidden w-full">
        {technologies.map((technology, index) => (
          <div
            ref={ref[index]}
            className="w-full flex flex-shrink-0 justify-center items-center  bg-red-400  "
          >
            <img
              className="w-full "
              src={technology.landscape}
              alt={technology.name}
            ></img>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-20">
        <div className=" flex space-x-4">
          <button
            onClick={() => scrollToTechnology(0)}
            class="bg-transparent hover:bg-white font-semibold  py-4 px-6 border border-white hover:border-transparent hover:text-black rounded-full"
          >
            1
          </button>
          <button
            onClick={() => scrollToTechnology(1)}
            class="bg-transparent hover:bg-white font-semibold  py-4 px-6  border border-white hover:border-transparent hover:text-black rounded-full"
          >
            2
          </button>
          <button
            onClick={() => scrollToTechnology(2)}
            class="bg-transparent hover:bg-white font-semibold py-4 px-6 border border-white hover:border-transparent hover:text-black rounded-full"
          >
            3
          </button>
        </div>
      </div>
      {/* the terminology  */}
      <div className="font-barlow-condensed text-[14px] flex justify-center text-gray-400 pt-10">
        <div>
          <h3> THE TERMINOLOGY... </h3>
        </div>
      </div>
      {/* type of spacecraft */}
      <div className="flex justify-center  text-[24px] font-bellefair">
        <div>
          <h1>{technologies[selectedIndex].name}</h1>
        </div>
      </div>
      {/* description of spacecraft */}
      <div className="flex justify-center text-center text-[15px] font-barlow md:w-[573px] md:h-[84px] md:ml-[90px] ">
        <div>
          <p>{technologies[selectedIndex].about}</p>
        </div>
      </div>
    </div>
  );
}
