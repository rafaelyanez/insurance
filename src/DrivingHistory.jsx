import { NumericInput, Section, SectionCard } from "@blueprintjs/core";
import { useState } from "react";

const DrivingHistory = () => {
  const [years, setYears] = useState(0);
  return (
    <Section title="Years of Experience" className="drivers-details">
      <SectionCard>
        <NumericInput
          min={0}
          max={90}
          onValueChange={(value) => setYears(value)}
          value={years}
        />
      </SectionCard>
    </Section>
  );
};

export default DrivingHistory;
