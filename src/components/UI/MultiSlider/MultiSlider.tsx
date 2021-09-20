import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "./MultiSlider.css";
import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
import { Button, DropdownItem, FormGroup } from "reactstrap";

export const MultiSlider = () => {
  const [value1, setValue1] = useState<number | string>(2);
  const [value2, setValue2] = useState<number | string>(0);
  const [submit, setSubmit] = useState({});

  const handleSubmit = (val: number) => setSubmit({ val });

  return (
    <AvForm className="drop-down__form" onSubmit={handleSubmit}>
      <AvGroup className="form-check p-0" check>
        <RangeSlider
          value={value1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue1(e.target.value)
          }
          min={1}
          max={50}
        />
        <RangeSlider
          value={value2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue2(e.target.value)
          }
          min={51}
          max={100}
        />
      </AvGroup>
      <DropdownItem divider />
      <FormGroup>
        <div className="portfolio-segment__footer">
          <Button className="btn portfolio-segment__btn" color="link">
            Сбросить
          </Button>
          <Button className="btn portfolio-segment__btn" color="link">
            Применить
          </Button>
        </div>
      </FormGroup>
    </AvForm>
  );
};
export default MultiSlider;