import { useEffect, useState } from "react";
import {
  ControlGroup,
  FormGroup,
  HTMLSelect,
  NumericInput,
  Section,
  SectionCard,
  Divider,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
const MAKE = ["HONDA", "TOYOTA", "CHEVROLET", "FORD", "HYUNDAI"];
const YEARS = Array.from(
  new Array(40),
  (val, index) => new Date().getFullYear() - index
);

const VehicleDetails = () => {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);
  const [carCost, setCarCost] = useState(0);

  useEffect(() => {
    requestModels();
  }, [make, year]);

  async function requestModels() {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}/vehicletype/car?format=json`
    );

    const json = await res.json();
    console.log(json);
    setModels(json.Results);
  }

  return (
    <Section title="Vehicle Details" className="drivers-details">
      <SectionCard>
        <FormGroup label="Make" labelFor="make">
          <HTMLSelect
            id="make"
            className="bp3-html-select"
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              setYear("");
              setModels([]);
            }}
            onBlur={(e) => {
              setMake(e.target.value);
              setYear("");
              setModels([]);
            }}
          >
            <option />
            {MAKE.map((make) => (
              <option key={make} value={make.toLowerCase()}>
                {make}
              </option>
            ))}
          </HTMLSelect>
        </FormGroup>
        <FormGroup label="Year" labelFor="year">
          <HTMLSelect
            id="year"
            className="bp3-html-select"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setModel("");
            }}
            onBlur={(e) => {
              setYear(e.target.value);
              setModel("");
            }}
          >
            <option />
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </HTMLSelect>
        </FormGroup>
        <FormGroup label="Model" labelFor="model">
          <HTMLSelect
            id="model"
            className="bp3-html-select"
            disabled={models.length === 0}
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
            }}
            onBlur={(e) => {
              setModel(e.target.value);
            }}
          >
            <option />
            {models.map((model) => (
              <option key={model.Model_ID} value={model.Model_Name}>
                {model.Model_Name}
              </option>
            ))}
          </HTMLSelect>
        </FormGroup>

        <FormGroup label="Purchase price" labelFor="carCost">
          <NumericInput
            id="carCost"
            min={0}
            leftIcon={IconNames.DOLLAR}
            locale="en-CA"
            buttonPosition="none"
            value={carCost}
            placeholder="Enter the amount you payed for the car..."
            onValueChange={(value) => setCarCost(value)}
          />
        </FormGroup>
      </SectionCard>
    </Section>
  );
};

export default VehicleDetails;
