import React, { useEffect, useState } from "react";
import Uri from "../api/axios";
import SelectBox from "../components/SelectBox";
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

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <SelectBox
            options={selectBox}
            name="launchpad"
            label="Launch Pad"
            placeholder="ANY"
            optionSelected={(value) => setSelectedLaunchpads(value)}
          />
        </div>
        <div>
          <SelectBox
            options={selectYears}
            name="minYear"
            label="Min Year"
            placeholder="ANY"
            optionSelected={(value) => setSelectedMinYear(value)}
          />
        </div>
        <div>
          <SelectBox
            options={selectYears}
            name="maxYear"
            label="Max Year"
            placeholder="ANY"
            optionSelected={(value) => setSelectedMaxYear(value)}
          />
        </div>
        <button className="bg-green-400 "> Apply</button>
      </form>

      <section className="results">
        {launches.map((launch) =>
          launch.payloads.map((payload, index) => (
            <div key={index}>
              {launch.flight_number}

              {payload.payload_id}

              {Object.keys(launch.links).map((item, itemindex) => (
                <a
                  href={launch.links[item]}
                  key={itemindex}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item}
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
