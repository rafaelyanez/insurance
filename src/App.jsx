import { createRoot } from "react-dom/client";
import VehicleDetails from "./VehicleDetails";
import DriversDetails from "./DriversDetails";
import DrivingHistory from "./DrivingHistory";
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
      <div>
        <VehicleDetails />
        <VehicleUsage />
        <DriversDetails />
        <DrivingHistory />
        <InsuranceHistory />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
