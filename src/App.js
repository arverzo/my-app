import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./NewPAge/Home";
import Destination from "./NewPAge/Destination";
import Crew from "./NewPAge/CrewPage";
import Technology from "./NewPAge/TechnologyPage";
import Mission from "./NewPAge/Mission";

function App() {
  return (
    <Router>
      <div className="w-screen relative ">
        <div className="w-full bg-transparent absolute top-0 lg:mt-5">
          <Header />
        </div>

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>

          <Route path="/destination">
            <Route index element={<Destination />} />
          </Route>

          <Route path="/crew">
            <Route index element={<Crew />} />
          </Route>

          <Route path="/technology">
            <Route index element={<Technology />} />
          </Route>

          <Route path="/mission">
            <Route index element={<Mission />} />
          </Route>
        </Routes>
      </div>
    </Router>

    //  main index
  );
}

export default App;
