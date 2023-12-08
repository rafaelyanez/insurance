import {
  NumericInput,
  Section,
  SectionCard,
  FormGroup,
} from "@blueprintjs/core";
import { useState } from "react";

const InsuranceHistory = () => {
  const [years, setYears] = useState(0);
  return (
    <Section title="Insurance History" className="section">
      <SectionCard>
        <FormGroup
          label={
            <>
              How many years of auto insurance <br></br>coverage have you had in
              the past
            </>
          }
        >
          <NumericInput
            min={0}
            max={90}
            onValueChange={(value) => setYears(value)}
            value={years}
          />
        </FormGroup>
      </SectionCard>
    </Section>
  );
};

export default InsuranceHistory;
