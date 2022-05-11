import React, { useState, useEffect, useReducer } from "react";

const planets = [
  {
    id: "01",
    destination: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    img: "/assets/destination/image-moon.webp",
  },
  {
    id: "02",
    destination: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    img: "/assets/destination/image-mars.webp",
  },
  {
    id: "03",
    destination: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    img: "/assets/destination/image-europa.webp",
  },
  {
    id: "04",
    destination: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    img: "/assets/destination/image-titan.webp",
  },
];

export default function Destination() {
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

  const scrollToPlanet = (index) => {
    setSelectedIndex(index);
    ref[index].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    // parent div
    <div
      className="bg-mobile-destination  flex flex-col justify-around    bg-center bg-cover bg-no-repeat
     h-screen md:w-screen  md:h-screen lg:h-screen lg:w-full lg:bg-desktop-destination
      lg:border-2 lg:border-white    "
    >
      <div className=" xl:flex">
        {/* pick your destination */}
        <div className="space-y-4 pt-20   xl:float-left ">
          <div className="   flex justify-center items-center  text-white ">
            <h3 className="text-[16px] font-barlow-condensed md:text-[20px] md:pr-[500px] lg:pr-[100px]">
              <span className="text-gray-700  ">01</span> PICK YOUR DESTINATION
            </h3>{" "}
          </div>

          {/* moon image */}
          <div className="flex overflow-x-hidden w-full ">
            {planets.map((planet, index) => (
              <div
                ref={ref[index]}
                className="w-full flex flex-shrink-0 justify-center items-center   ] "
              >
                <img
                  className="w-[170px] md:w-[300px]  md:h-[300px] lg:mt-[30px] lg:ml-[50px] lg:h-[400px] lg:w-[400px]"
                  src={planet.img}
                  alt={planet.destination}
                ></img>
              </div>
            ))}
          </div>
        </div>
        {/* names of moons */}

        {/* MOON*/}
        <div>
          <div className="space-y-4 lg:ml-[130px] lg:-mt-[10px] ">
            <div className="text-white flex justify-center text-[14px] font-barlow-condensed space-x-4 pt-[10px] md:pt-0] xl:pt-[150px] xl:pr-[180px] ">
              <div className=" flex space-x-[30px] md:font-barlow-condensed md:text-[16px]  md:space-x-[50px] ">
                <div
                  className="ease-in-out duration-300"
                  onClick={() => scrollToPlanet(0)}
                >
                  <button class="transition ease-in-out delay-150 bg-transparent  hover:border-b hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300 ...">
                    MOON
                  </button>
                </div>
                <div onClick={() => scrollToPlanet(1)}>
                  <button class="transition ease-in-out delay-150 bg-transparent hover:border-b hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300 ...">
                    MARS
                  </button>
                </div>
                <div onClick={() => scrollToPlanet(2)}>
                  {" "}
                  <button class="transition ease-in-out delay-150 bg-transparent  hover:border-b hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300 ...">
                    EUROPA
                  </button>
                </div>
                <div onClick={() => scrollToPlanet(3)}>
                  {" "}
                  <button class="transition ease-in-out delay-150 bg-transparent hover:border-b hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300 ...">
                    TITAN
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-full flex  overflow-x-hidden  ">
              <div className="w-full flex-shrink-0 px-4">
                <div className=" text-white justify-center flex xl:pr-[180px] ">
                  <h1 className="text-[56px] font-bellefair md:text-[80px]  xl:text-[100px]   ">
                    {planets[selectedIndex].destination}
                  </h1>
                </div>
                {/* moon description */}
                <div className="  text-white   ">
                  <p
                    className="  ml-10 mr-10   lg:text-left  text-[15px] font-barlow  text-center  md:text-[16px]  md:ml-[90px] md:mr-[90px]  lg:ml-[80px] lg:mr-[150px] lg:text-[18px]
                
            "
                  >
                    {planets[selectedIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="  text-white  flex flex-col space-y-1  md:inline-grid md:grid-cols-4  mt-[50px] lg:ml-[100px]">
            <div className="w-full px-10 xl:invisible">
              <div className="border-1 border-b  border-gray-500 items-center w-full  md:w-[700px] "></div>
            </div>

            <div className=" w-full flex flex-col items-center  xl:-ml-[70px] ">
              <h3 className="font-barlow-condensed text-[14px] ">
                AVG. DISTANCE
              </h3>
              <h1 className="font-bellefair text-[28px]">
                {planets[selectedIndex].distance}
              </h1>
            </div>

            <div className=" w-full flex flex-col items-center  md:inline-grid  ">
              <h3 className="font-barlow-condensed text-[14px] ">EST.TRAVEL</h3>
              <h1 className="font-bellefair text-[28px]">
                {planets[selectedIndex].travelTime}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const navs = ["MOON", "MARS", "EUROPA", "TITAN"];
