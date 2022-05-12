import { Input } from "postcss";
import React, { useEffect, useState } from "react";
import Uri from "../api/axios";
import MissionBanner from "../components/MissionBanner";
import SelectBox from "../components/SelectBox";
import format from "date-fns/format";
import Footer from "../components/Footer";

const Mission = () => {
  const [launchpads, setLaunchpads] = useState([]);
  const [selectBox, setSelectbox] = useState([]);
  const [launches, setLaunches] = useState([]);
  let [userLaunchesData, setUserLaunchesData] = useState([]);
  const [years, setYears] = useState([]);
  const [selectYears, setSelectYears] = useState([]);
  const [selectedMinYear, setSelectedMinYear] = useState("");
  const [selectedMaxYear, setSelectedMaxYear] = useState("");
  const [selectedLaunchpads, setSelectedLaunchpads] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLaunchpads();
    fetchLaunches();
  }, []);

  useEffect(() => {
    const selectOptionYear = years.map((item) => {
      return { value: item, label: item };
    });
    setSelectYears(selectOptionYear);
  }, [years]);

  const fetchLaunchpads = async () => {
    try {
      const response = await Uri.get("/launchpads");
      setLaunchpads(response.data);
      const selectBoxData = await getLaunchpads(response.data);
      setSelectbox(selectBoxData);
    } catch (error) {}
  };

  const fetchLaunches = async () => {
    try {
      const response = await Uri.get("/launches");
      setLaunches(response.data);
      const year = await getYears(response.data);
      setYears(year);
    } catch (error) {}
  };

  const getLaunchpads = async (option) => {
    return option.reduce(
      (list, item, index) => {
        list.push({ value: item.id, label: item.full_name });

        return list;
      },

      [{ value: "", label: "ANY" }]
    );
  };

  const getYears = async (option) => {
    return option.reduce(
      (list, item, index) => {
        let year = new Date(item.launch_date_local).getFullYear();

        if (list.indexOf(year) === -1) {
          list.push(year);
        }
        return list;
      },
      ["ANY"]
    );
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      let searchCriteria = "?";
      if (search !== "") {
        searchCriteria += "q=" + search;
      }

      if (selectedLaunchpads !== "" && selectedLaunchpads !== "ANY") {
        searchCriteria += "&launch_site.site_id=" + selectedLaunchpads;
      }

      if (selectedMinYear !== "" && selectedMinYear !== "ANY") {
        searchCriteria += "&launch_date_local_gte=" + selectedMinYear;
      }
      if (selectedMaxYear !== "" && selectedMaxYear !== "ANY") {
        searchCriteria += "&launch_date_local_lte=" + selectedMaxYear;
      }

      if (
        selectedMinYear !== "" &&
        selectedMinYear !== "ANY" &&
        selectedMaxYear !== "" &&
        selectedMaxYear !== "ANY"
      ) {
        if (selectedMinYear > selectedMaxYear) {
          alert("invalid date range ");
        }
      }

      const response = await Uri.get("/launches" + searchCriteria);
      setLaunches(response.data);
      console.log(searchCriteria);
    } catch (error) {}
  };

  const data = [];

  const defect = () => {
    img.target.src = "";
  };

  return (
    <div>
      <MissionBanner />
      {/* md:block md:justify-center */}
      <form onSubmit={submit}>
        <div className="lg:flex lg:justify-center ">
          <div className="bg-slate-800 w-screen">
            <div
              id="parent sof subdiv"
              className="md:flex md:justify-center lg:flex lg:justify-center "
            >
              <div id="1st div" className="md:w-[300px] lg:flex lg:w-[700px]">
                <div
                  className=" w-full barlow-condensed appearance-none 
          rounded-sm py-2 px-3 text-white  leading-tight bg-transparent "
                >
                  <label> KEYWORD</label>
                  <input
                    value={search}
                    onInput={(e) => setSearch(e.target.value)}
                    type="text"
                    name="keyword"
                    placeholder="eg Falcon"
                    className=" w-full barlow-condensed appearance-none border 
          rounded-sm py-2 px-3 text-white leading-tight bg-transparent "
                  />
                </div>
                <div
                  className=" w-full barlow-condensed appearance-none 
          rounded-sm py-2 px-3 text-white  leading-tight bg-transparent "
                >
                  <SelectBox
                    options={selectBox}
                    name="launchpad"
                    label="LAUNCH PAD"
                    placeholder="ANY"
                    optionSelected={(value) => setSelectedLaunchpads(value)}
                  />
                </div>
              </div>
              {/*  */}
              <div id="second div" className="md:w-[300px] lg:flex">
                <div
                  className=" w-full barlow-condensed appearance-none 
          rounded-sm py-2 px-3 text-white  leading-tight bg-transparent "
                >
                  <SelectBox
                    options={selectYears}
                    name="minYear"
                    label="MIN YEAR"
                    placeholder="ANY"
                    optionSelected={(value) => setSelectedMinYear(value)}
                  />
                </div>
                <div
                  className=" w-full barlow-condensed appearance-none  
          rounded-sm py-2 px-3 text-white leading-tight bg-transparent "
                >
                  <SelectBox
                    options={selectYears}
                    name="maxYear"
                    label="MAX YEAR"
                    placeholder="ANY"
                    optionSelected={(value) => setSelectedMaxYear(value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end of parent subdiv */}
          <div className="md:flex md:justify-center bg-slate-800">
            <div className="col-span-2 pt-8 md:mt-0 md:w-[600px] px-3  py-5   md:py-5 lg:px-3 lg:pt-6 lg:w-[200px] lg:mr-10 ">
              <button
                className="barlow-condensed bg-green-500 p-2 text-center text-black bold w-full 
         rounded-sm hover:bg-gray-200 transition duration-200 ease-in-out "
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center bg-black text-red-500">
        {" "}
        {launches && (
          <p>
            Showing {launches.length}
            {launches.length > 1 ? " Missions" : " Mission"}
          </p>
        )}
      </div>
      <section id="results">
        {launches.map((launch) =>
          launch.payloads.map((payload, index) => (
            <div key={index}>
              <div className="bg-black">
                <div className="flex px-2 py-[30px] ">
                  <div className="md:ml-[70px] lg:ml-[150px]">
                    <img
                      onError={defect}
                      src={launch.links.mission_patch}
                      alt=""
                      className="w-[150px] h-[70px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                    />
                  </div>

                  <div
                    id="una"
                    className="bg-black md:ml-[90px] lg:ml-[150px] "
                  >
                    <h4 className=" barlow text-white">
                      {launch.rocket.rocket_name} - {payload.payload_id}
                    </h4>
                    <span className="text-red-500">
                      {launch.land_success === true ? "" : "Failed Mission"}
                    </span>
                    <p className="barlow  text-gray-300 text-xs md:text-sm md:w-4/5 mt-10">
                      {`Launched ${format(
                        new Date(launch.launch_date_local),
                        "do MMMM yyyy"
                      )} at

                           ${format(
                             new Date(launch.launch_date_local),
                             "h:m bb"
                           )}   from ${
                        launchpads.filter(
                          (pad) => launch?.launch_site?.site_id === pad?.id
                        )[0]?.full_name
                      }`}
                    </p>
                  </div>
                  <div className="lg:ml-[300px]">
                    <div className="text-center w-[10%] break-normal ml-[90px] mt-[px] md:ml-[30px] ">
                      <h2 className="barlow text-white -ml-[50px] lg:right-0 ">
                        {launch.flight_number}
                      </h2>

                      <p className="text-slate-500  barlow-condensed -ml-[50px] ">
                        Flight Number
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-x-2 lg:space-x-4 space-y-2 mt-2 md:mt-8"></div>

                {Object.keys(launch.links)
                  .slice(1)
                  .map((item, itemindex) => (
                    <a
                      href={launch.links[item]}
                      key={itemindex}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* {console.log("result: " + item)} */}

                      {item === "article_link" && (
                        <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white md:hover:border-white md:hover-white hover:text-white ml-2  md:ml-[30px] lg:ml-[50px] ">
                          Article
                        </button>
                      )}

                      {item == "video_link" && (
                        <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white  hover:text-white  md:hover:border-white md:hover-white  ml-2  md:ml-[30px]">
                          Watch Video
                        </button>
                      )}

                      {item == "reddit_launch" && (
                        <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white   md:hover:border-white md:hover-white ml-2 ">
                          Reddit Launch
                        </button>
                      )}

                      {item == "presskit" && (
                        <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white  md:hover:border-white md:hover-white ml-2 md:ml-[30px] lg:ml-[50px] ">
                          Press Kit
                        </button>
                      )}

                      {item == "reddit_campaign" && (
                        <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white  md:hover:border-white md:hover-white  ml-2 md:ml-[30px] lg:ml-[50px]">
                          Reddit Campaign
                        </button>
                      )}

                      {item == "reddit_media" && (
                        <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white  md:hover:border-white md:hover-white    ml-2 mt-[5px] ">
                          Reddit Media
                        </button>
                      )}

                      {item == "reddit_recovery" && (
                        <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white   md:hover:border-white md:hover-white   ml-2  ">
                          Reddit Recovery
                        </button>
                      )}
                    </a>
                  ))}
              </div>
            </div>
          ))
        )}
      </section>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Mission;
