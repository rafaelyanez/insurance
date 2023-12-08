import { createRoot } from "react-dom/client";
import { Tabs, Tab } from "@blueprintjs/core";
import VehicleDetails from "./VehicleDetails";
import DriversDetails from "./DriversDetails";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";
import VehicleUsage from "./VehicleUsage";
import InsuranceHistory from "./InsuranceHistory";

function App() {
  return (
    <div>
      <header>
        <center>
          <h1>Car Insurance Quote</h1>
        </center>
      </header>

      <div className="center-main-div">
        <Tabs
          id="insurance-quote"
          animate={true}
          large={true}
          renderActiveTabPanelOnly={true}
          vertical={true}
        >
          <Tab
            id="vd"
            title="Vehicle's Details"
            panel={<VehicleDetails />}
          ></Tab>
          <Tab id="vu" title="Vehicle's Usage" panel={<VehicleUsage />}></Tab>
          <Tab
            id="dd"
            title="Driver's Details"
            panel={<DriversDetails />}
          ></Tab>
          <Tab
            id="ih"
            title="Insurance History"
            panel={<InsuranceHistory />}
          ></Tab>
        </Tabs>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
