import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function MissionBanner() {
  const scrollToResults = () => {
    window.scroll({ top: 550, left: 0, behavior: "smooth" });
  };
  return (
    <div
      className="bg-desktop-mission bg-cover bg-no-repeat md:bg-desktop-mission md:bg-cover md:bg-no-repeat pt-[60px] md:pt-[150px] 
    lg:bg-desktop-mission lg:bg-cover lg:bg-no-repeat lg:pt-[400px]"
    >
      <div className="flex pt-[100px]"></div>

      <div className="flex justify-center mt-[90px] text-[25px] text-white font-bellefair">
        <h3>
          {" "}
          DISCOVER SPACE MISSIONS
          <div id="dropdown-icoon" className=" flex justify-center">
            <IoIosArrowDown
              className="cursor-pointer text-lg w-10 h-10 text-white text-center mx-auto"
              onClick={() => scrollToResults()}
            ></IoIosArrowDown>
            <div className="absolute bottom-0   h-[100px] text-center w-full gradient"></div>
          </div>
        </h3>
      </div>
    </div>
  );
}

export default MissionBanner;
