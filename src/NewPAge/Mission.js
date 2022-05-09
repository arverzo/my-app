import { Input } from "postcss";
import React, { useEffect, useState } from "react";
import Uri from "../api/axios";
import MissionBanner from "../components/MissionBanner";
import SelectBox from "../components/SelectBox";
import Moment from "moment";

const Mission = () => {
  const [launchpads, setLaunchpads] = useState([]);
  const [selectBox, setSelectbox] = useState([]);
  const [launches, setLaunches] = useState([]);
  const [years, setYears] = useState([]);
  const [selectYears, setSelectYears] = useState([]);
  const [selectedMinYear, setSelectedMinYear] = useState([]);
  const [selectedMaxYear, setSelectedMaxYear] = useState([]);
  const [SelectedLaunchpads, setSelectedLaunchpads] = useState([]);

  useEffect(() => {
    fetchLaunchpads();
    fetchLaunches();
  }, []);

  useEffect(() => {
    const selectOptionYear = years.map((item) => {
      return { value: item, label: item };
    });
    setSelectYears(selectOptionYear);
    console.log(selectYears);
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
      let searchCriteria = "";
      searchCriteria += "?launch_date_local_lte" + selectedMaxYear;
      const response = await Uri.get("/launches" + searchCriteria);
      setLaunches(response.data);
    } catch (error) {}
  };

  const data = [];

  return (
    <div>
      <MissionBanner />
      {/* md:block md:justify-center */}
      <form onSubmit={submit}>
        <div className="lg:flex lg:justify-center ">
          <div
            id="parent sof subdiv"
            className="md:flex md:justify-center bg-gray-400 lg:flex lg:justify-center "
          >
            <div id="1st div" className="md:w-[300px] lg:flex lg:w-[700px]">
              <div
                className=" w-full barlow-condensed appearance-none border 
          rounded-sm py-2 px-3 text-gray leading-tight bg-transparent "
              >
                <SelectBox
                  name="keyword"
                  label="KEYWORD"
                  placeholder="eg Falcon"
                  value=""
                />
              </div>
              <div
                className=" w-full barlow-condensed appearance-none border 
          rounded-sm py-2 px-3 text-gray leading-tight bg-transparent "
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
                className=" w-full barlow-condensed appearance-none border 
          rounded-sm py-2 px-3 text-gray leading-tight bg-transparent "
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
                className=" w-full barlow-condensed appearance-none border 
          rounded-sm py-2 px-3 text-gray leading-tight bg-transparent "
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

          {/* end of parent subdiv */}
          <div className="md:flex md:justify-center">
            <div className="col-span-2  mt-4 md:mt-0 md:w-[620px] px-3 lg:px-3 lg:w-[200px] lg:mt-[30px]">
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

      <section className="results">
        {launches.map((launch) =>
          launch.payloads.map((payload, index) => (
            <div key={index} className="bg-black">
              <div className="flex px-2 py-[30px] ">
                <div className="md:ml-[70px]">
                  <img
                    src={launch.links.mission_patch}
                    alt="image"
                    className="w-[90px] h-[60px] md:h-[90px] lg:w-[50px] lg:h-[50px]"
                  ></img>
                </div>
                <div id="una" className="bg-black md:ml-[90px] ">
                  <h4 className=" barlow text-white">
                    {launch.rocket.rocket_name} - {payload.payload_id}
                  </h4>
                  <p className="barlow mt-2 text-gray-300 text-xs md:text-sm md:w-4/5">
                    Launch on
                    {" " + launch.launch_date_local}
                    from {launch.launch_site.site_name}
                  </p>
                </div>

                <div className="text-center w-[10%] break-normal ml-[90px] md:ml-[30px]">
                  <h2 className="barlow text-white -ml-[50px]  ">
                    {launch.flight_number}
                  </h2>

                  <p className="text-gray-400 barlow-condensed -ml-[50px] ">
                    Flight Number
                  </p>
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
                    {console.log("result: " + item)}

                    {item === "article_link" && (
                      <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white ml-2  md:ml-[30px] ">
                        Article
                      </button>
                    )}

                    {item == "video_link" && (
                      <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white  hover:text-white ml-2  md:ml-[30px]">
                        Watch Video
                      </button>
                    )}

                    {item == "reddit_launch" && (
                      <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white ml-2 ">
                        Reddit Launch
                      </button>
                    )}

                    {item == "presskit" && (
                      <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white ml-2 md:ml-[30px] ">
                        Press Kit
                      </button>
                    )}

                    {item == "reddit_campaign" && (
                      <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white ml-2 md:ml-[30px]">
                        Reddit Campaign
                      </button>
                    )}

                    {item == "reddit_media" && (
                      <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white ml-2 ">
                        Reddit Media
                      </button>
                    )}

                    {item == "reddit_recovery" && (
                      <button className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white ml-2  ">
                        Reddit Recovery
                      </button>
                    )}
                  </a>
                ))}
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Mission;
