import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function MissionBanner() {
  return (
    <div className="bg-desktop-mission bg-cover bg-no-repeat">
      <div className="flex pt-[100px]"></div>

      <div className="flex justify-center mt-[90px] text-[25px] text-white font-bellefair">
        <h3>
          {" "}
          DISCOVER SPACE MISSIONS
          <div id="dropdown-icoon" className=" flex justify-center">
            <IoIosArrowDown></IoIosArrowDown>
          </div>
        </h3>
      </div>
    </div>
  );
}

export default MissionBanner;
