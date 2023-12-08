import { DatePicker3 } from "@blueprintjs/datetime2";
import { NumericInput } from "@blueprintjs/core";
import { useState } from "react";

const DriversDetails = () => {
  const [accidents, setAccidents] = useState(0);
  const [claims, setClaims] = useState(0);
  return (
    <div className="drivers-details">
      <label htmlFor="dob">
        Date of Birth
        <DatePicker3 />
      </label>
      <label htmlFor="traffic-accidents">
        Traffic violations or accidents in the last 5 years
        <NumericInput
          onValueChange={(value) => setAccidents(value)}
          value={accidents}
        />
      </label>
      <label htmlFor="claims">
        Number of claims in the last 5 years
        <NumericInput
          onValueChange={(value) => setClaims(value)}
          value={claims}
        />
      </label>
    </div>
  );
};

export default DriversDetails;
