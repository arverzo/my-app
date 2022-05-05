import React, { useEffect, Component } from "react";
import launchesData from "../api/launches.json";
import padsData from "../api/launchpads.json";
import MissionBanner from "../components/MissionBanner";
import SearchRow from "../components/SearchRow";
import SearchWidgets from "../components/SearchWidgets";
import DateFormatter from "../components/DateFormatter";
import { useState } from "react";
import dayjs from "dayjs";

const isBetween = require("dayjs/plugin/isBetween");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export default function Discover() {
  return (
    <div>
      {/* filter content */}
      <MissionBanner />
      <SearchWidgets />
      {launchesData.map((item, id) => (
        <SearchRow
          key={id}
          flight_number={item.flight_number}
          launch_date_local={item.launch_date_local}
          rocket={item.rocket}
          launch_site={item.launch_site}
          payloads={item.payloads}
          land_success={item.land_success}
          links={item.links}
          launchpads={padsData}
        />
      ))}
    </div>
  );
}
