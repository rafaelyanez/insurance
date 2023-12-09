import {
  SegmentedControl,
  FormGroup,
  Section,
  SectionCard,
} from "@blueprintjs/core";
import { useEffect } from "react";
import { useState } from "react";

const VehicleUsage = (props) => {
  const [business, setBusiness] = useState(false);
  const [kilometres, setKilometres] = useState(-1);

  useEffect(() => {
    if (kilometres > 0) {
      props.setVehicleUsageReady(true);
    }
  }, [kilometres]);

  return (
    <Section title="Vehicle's Usage" className="section">
      <SectionCard padded={true}>
        <FormGroup
          key="business-form-group"
          label="Do you use this car for business purposes?"
        >
          <SegmentedControl
            className="business-buttons"
            intent="primary"
            value={business}
            options={[
              {
                label: "Yes",
                value: true,
              },
              {
                label: "No",
                value: false,
              },
            ]}
            onValueChange={(value) => setBusiness(value)}
          />
        </FormGroup>
        <FormGroup
          label="Select the number of kilometres you drive in a year, to the best of
          your knowledge"
        >
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
      </SectionCard>
    </Section>
  );
};

export default VehicleUsage;
