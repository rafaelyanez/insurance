import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { Tabs, Tab, Icon, Button } from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";

import logoImage from "./logo.svg";
import VehicleUsage from "./VehicleUsage";
import InsuranceHistory from "./InsuranceHistory";
import VehicleDetails from "./VehicleDetails";
import DriversDetails from "./DriversDetails";
import ResponseDialog from "./ResponseDialog";
import useFetchQuote from "./useFetchQuote";

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
  const [quoteData, setQuoteData] = useState();
  const [quote, status] = useFetchQuote(quoteData);

  // quote data
  const [year, setYear] = useState("");
  const [carCost, setCarCost] = useState();
  const [business, setBusiness] = useState(false);
  const [kilometres, setKilometres] = useState();
  const [accidents, setAccidents] = useState(0);
  const [claims, setClaims] = useState(0);
  const [personAge, setPersonAge] = useState();
  const [yearsInsuranceHistory, setYearsInsuranceHistory] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState();

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

  useEffect(() => {
    if (status === "loaded") {
      setIsDialogOpen(true);
    }
  }, [status]);

  const buttonClass = isEnabledQuoteButton
    ? "quote-button"
    : "quote-button-disabled";

  return (
    <div>
      <header>
        <center>
          <img src={logoImage} alt="Insurance logo" width="200" height="200" />
          <h1>Auto Insurance Quote</h1>
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
              <VehicleDetails
                setVehicleDetailsReady={setVehicleDetailsReady}
                year={year}
                setYear={setYear}
                carCost={carCost}
                setCarCost={setCarCost}
              />
            }
          ></Tab>
          <Tab
            id="vu"
            title={getTitle(vehicleUsageReady, "Vehicle's Usage")}
            panel={
              <VehicleUsage
                setVehicleUsageReady={setVehicleUsageReady}
                business={business}
                setBusiness={setBusiness}
                kilometres={kilometres}
                setKilometres={setKilometres}
              />
            }
          ></Tab>
          <Tab
            id="dd"
            title={getTitle(driversDetailsReady, "Driver's Details")}
            panel={
              <DriversDetails
                setDriversDetailsReady={setDriversDetailsReady}
                accidents={accidents}
                setAccidents={setAccidents}
                claims={claims}
                setClaims={setClaims}
                personAge={personAge}
                setPersonAge={setPersonAge}
                yearsOfExperience={yearsOfExperience}
                setYearsOfExperience={setYearsOfExperience}
              />
            }
          ></Tab>
          <Tab
            id="ih"
            title={getTitle(insuranceHistoryReady, "Insurance History")}
            panel={
              <InsuranceHistory
                setInsuranceHistoryReady={setInsuranceHistoryReady}
                yearsInsuranceHistory={yearsInsuranceHistory}
                setYearsInsuranceHistory={setYearsInsuranceHistory}
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
            loading={status === "loading"}
            onClick={() => {
              setQuoteData({
                year,
                carCost,
                business,
                kilometres,
                accidents,
                claims,
                personAge,
                yearsInsuranceHistory,
                yearsOfExperience,
              });
            }}
          ></Button>
        </div>
        <ResponseDialog
          isOpen={isDialogOpen}
          quote={quote}
          setIsDialogOpen={setIsDialogOpen}
        ></ResponseDialog>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
