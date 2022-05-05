import React from "react";
import Select from "react-select";

function SearchWidgets() {
  return (
    <div className="bg-gray-900 p-5 md:px-8 grid grid-cols-2 md:grid-cols-7 gap-2 border-b border-slate-500 items-end grid-flow-row-dense">
      {/* Search  Keyword */}
      <div className="md:col-span-2">
        <label
          className=" text-white w-full block barlow-condensed text-kwhite text-xs md:text-sm uppercase font-bold mb-2"
          htmlFor="keywords"
        >
          Keywords
        </label>
        <input
          className=" w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent "
          id="keywords"
          type="text"
          placeholder="eg Falcon"
          autoFocus
        />
      </div>
      <div className="md:col-span-2">
        <label
          htmlFor="pad"
          className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 "
        >
          Launch Pad
        </label>
        <select
          id="pad"
          className="w-full barlow-condensed appearance-none border rounded-sm py-3 md:py-2 text-white leading-tight bg-transparent border-gray-300 hover:border-white cursor-pointer text-xs md:text-sm"
        >
          <option value="" className="px-4 py-2 text-sm text-slate-700">
            Any
          </option>
        </select>
      </div>
      <div>
        <label
          htmlFor="maxYear"
          className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 "
        >
          Max Year
        </label>
        <select
          id="maxYear"
          className="w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white cursor-pointer"
        >
          <option
            className="px-4 py-2 text-sm text-slate-700"
            value=""
            selected
          >
            Any
          </option>
        </select>
      </div>
      <div>
        <label
          htmlFor="minYear"
          className="barlow-condensed text-white text-xs md:text-sm uppercase font-bold mb-2 "
        >
          Min Year
        </label>
        <select
          id="minYear"
          className="w-full barlow-condensed appearance-none border rounded-sm
           py-2 px-3 text-white leading-tight bg-transparent border-gray-300 hover:border-white cursor-pointer"
        >
          <option
            className="px-4 py-2 text-sm text-slate-700"
            value=""
            selected
          >
            Any
          </option>
        </select>
      </div>
      <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
        <button className="barlow-condensed bg-white p-2 text-center text-black bold w-full  rounded-sm hover:bg-gray-200 transition duration-200 ease-in-out ">
          Apply
        </button>
      </div>
    </div>
  );
}

export default SearchWidgets;
