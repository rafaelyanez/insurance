import { NumericInput } from "@blueprintjs/core";
import { useState } from "react";

const InsuranceHistory = () => {
  const [years, setYears] = useState(0);
  return (
    <div className="insurance-history">
      <label htmlFor="years-of-experience">
        Insurance History
        <NumericInput
          onValueChange={(value) => setYears(value)}
          value={years}
        />
      </label>
    </div>
  );
};

export default InsuranceHistory;
