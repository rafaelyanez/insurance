import { createRoot } from "react-dom/client";
import { Tabs, Tab, Icon, Button } from "@blueprintjs/core";
import VehicleDetails from "./VehicleDetails";
import DriversDetails from "./DriversDetails";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";
import logoImage from "./logo.svg";
import VehicleUsage from "./VehicleUsage";
import InsuranceHistory from "./InsuranceHistory";
import { useEffect, useState } from "react";
import ResponseDialog from "./ResponseDialog";

function getTitle(isEnabled, text) {
  return (
    <p style={{ color: isEnabled ? "#25E629" : "" }}>
      <Icon
        icon="tick"
        style={{ visibility: isEnabled ? "" : "hidden" }}
      ></Icon>
      {text}
    </p>
  );
}

function App() {
  const [vehicleDetailsReady, setVehicleDetailsReady] = useState(false);
  const [driversDetailsReady, setDriversDetailsReady] = useState(false);
  const [vehicleUsageReady, setVehicleUsageReady] = useState(false);
  const [insuranceHistoryReady, setInsuranceHistoryReady] = useState(false);
  const [isEnabledQuoteButton, setIsEnabledQuoteButton] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (
      vehicleDetailsReady &&
      driversDetailsReady &&
      vehicleUsageReady &&
      insuranceHistoryReady
    ) {
      setIsEnabledQuoteButton(true);
    } else {
      setIsEnabledQuoteButton(false);
    }
  }, [
    vehicleDetailsReady,
    driversDetailsReady,
    vehicleUsageReady,
    insuranceHistoryReady,
  ]);

  const buttonClass = isEnabledQuoteButton
    ? "quote-button"
    : "quote-button-disabled";

  return (
    <div>
      <header>
        <center>
          <img src={logoImage} alt="Insurance logo" width="200" height="200" />
          <h1>Car Insurance Quote</h1>
        </center>
      </header>

      <div className="center-main-div">
        <Tabs
          id="insurance-quote"
          animate={true}
          large={true}
          renderActiveTabPanelOnly={false}
          vertical={true}
        >
          <Tab
            id="vd"
            title={getTitle(vehicleDetailsReady, "Vehicle's Details")}
            panel={
              <VehicleDetails setVehicleDetailsReady={setVehicleDetailsReady} />
            }
          ></Tab>
          <Tab
            id="vu"
            title={getTitle(vehicleUsageReady, "Vehicle's Usage")}
            panel={<VehicleUsage setVehicleUsageReady={setVehicleUsageReady} />}
          ></Tab>
          <Tab
            id="dd"
            title={getTitle(driversDetailsReady, "Driver's Details")}
            panel={
              <DriversDetails setDriversDetailsReady={setDriversDetailsReady} />
            }
          ></Tab>
          <Tab
            id="ih"
            title={getTitle(insuranceHistoryReady, "Insurance History")}
            panel={
              <InsuranceHistory
                setInsuranceHistoryReady={setInsuranceHistoryReady}
              />
            }
          ></Tab>
        </Tabs>
        <div>
          <Button
            disabled={!isEnabledQuoteButton}
            className={buttonClass}
            text="Get Quote"
            large={true}
            onClick={() => setIsDialogOpen(true)}
          ></Button>
        </div>
        <ResponseDialog
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        ></ResponseDialog>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
