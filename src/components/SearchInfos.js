import React from "react";
import SearchRow from "./SearchRow";

function SearchInfos(launchesData, launchpads) {
  return (
    <div>
      {launchesData.map((launch, key) => (
        <SearchRow
          key={key}
          flight_number={launch.flight_number}
          launch_date_local={launch.launch_date_local}
          rocket={launch.rocket}
          launch_site={launch.launch_site}
          land_success={launch.land_success}
          payloads={launch.payloads}
          links={launch.links}
          launchpads={launchpads}
        />
      ))}
    </div>
  );
}
export default SearchInfos;
