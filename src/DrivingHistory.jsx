import { NumericInput } from "@blueprintjs/core";
import { useState } from "react";

const DrivingHistory = () => {
  const [years, setYears] = useState(0);
  return (
    <div className="driving-history">
      <label htmlFor="years-of-experience">
        Years of Experience
        <NumericInput
          onValueChange={(value) => setYears(value)}
          value={years}
        />
      </label>
    </div>
  );
};

export default DrivingHistory;
