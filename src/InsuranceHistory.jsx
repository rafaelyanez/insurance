import { NumericInput, Section, SectionCard } from "@blueprintjs/core";
import { useState } from "react";

const InsuranceHistory = () => {
  const [years, setYears] = useState(0);
  return (
    <Section title="Insurance History" className="drivers-details">
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

export default InsuranceHistory;
