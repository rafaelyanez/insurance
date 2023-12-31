import {
  NumericInput,
  Section,
  SectionCard,
  FormGroup,
} from "@blueprintjs/core";
import { useEffect } from "react";

import { convertToPositiveInteger } from "./utils/utils";

const InsuranceHistory = (props) => {
  const years = props.yearsInsuranceHistory;
  const setYears = props.setYearsInsuranceHistory;
  useEffect(() => {
    if (years) {
      props.setInsuranceHistoryReady(true);
    } else {
      props.setInsuranceHistoryReady(false);
    }
  }, [years]);
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
            allowNumericCharactersOnly={true}
            onValueChange={(_, value) =>
              setYears(convertToPositiveInteger(value).toString())
            }
            value={years}
          />
        </FormGroup>
      </SectionCard>
    </Section>
  );
};

export default InsuranceHistory;
