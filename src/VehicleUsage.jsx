import { SegmentedControl, FormGroup } from "@blueprintjs/core";
import { useState } from "react";

const VehicleUsage = () => {
  const [business, setBusiness] = useState("no");
  const [kilometres, setKilometres] = useState(0);
  console.log(business);
  return (
    <div className="driving-history">
      <FormGroup label="Usage">
        Do you use this car for business purposes?
        <SegmentedControl
          intent="primary"
          value={business}
          options={[
            {
              label: "Yes",
              value: "yes",
            },
            {
              label: "No",
              value: "no",
            },
          ]}
          onValueChange={(value) => setBusiness(value)}
        />
        Select the number of kilometres you drive in a year, to the best of your
        knowledge.
        <SegmentedControl
          intent="primary"
          value={kilometres}
          options={[
            {
              label: "<20,000 km",
              value: 0,
            },
            {
              label: ">=20,000 km <30,000 km",
              value: 1,
            },
            {
              label: ">=30,000 km <50,000 km",
              value: 2,
            },
            {
              label: ">=50,000km",
              value: 3,
            },
          ]}
          onValueChange={(value) => setKilometres(value)}
        />
      </FormGroup>
    </div>
  );
};

export default VehicleUsage;
