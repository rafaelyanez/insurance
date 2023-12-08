import { DatePicker3 } from "@blueprintjs/datetime2";
import {
  Classes,
  NumericInput,
  FormGroup,
  Section,
  SectionCard,
  Divider,
} from "@blueprintjs/core";
import { useState } from "react";

const DriversDetails = () => {
  const [accidents, setAccidents] = useState(0);
  const [claims, setClaims] = useState(0);

  const currentDate = new Date();
  const date16YearsAgo = new Date(currentDate);
  date16YearsAgo.setFullYear(currentDate.getFullYear() - 16);
  const [birthDate, setBirthDate] = useState(date16YearsAgo);
  const date100YearsAgo = new Date(currentDate);
  date100YearsAgo.setFullYear(currentDate.getFullYear() - 100);
  const datePickerClasses = `${Classes.ELEVATION_1} date-of-birth-picker`;

  return (
    <Section title="Driver's Details" className="drivers-details">
      <SectionCard padded={true}>
        <FormGroup label="Date of Birth">
          <DatePicker3
            dayPickerProps={{ showOutsideDays: true }}
            className={datePickerClasses}
            highlightCurrentDay={true}
            maxDate={date16YearsAgo}
            minDate={date100YearsAgo}
            value={birthDate}
            onChange={(selectedDate) => setBirthDate(selectedDate)}
          />
        </FormGroup>

        <FormGroup
          label={
            <>
              Traffic violations or accidents in the<br></br> last 5 years
            </>
          }
        >
          <NumericInput
            min={0}
            onValueChange={(value) => setAccidents(value)}
            value={accidents}
          />
        </FormGroup>

        <FormGroup label="Number of claims in the last 5 years">
          <NumericInput
            min={0}
            onValueChange={(value) => setClaims(value)}
            value={claims}
          />
        </FormGroup>
      </SectionCard>
    </Section>
  );
};

export default DriversDetails;
