import React, { useState } from "react";
import {
  NativeSelect,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";

import styles from "./CountryPicker.module.css";
const CountryPicker = ({ state, onChange }) => {
  const [currentState, setCurrentState] = useState("");

  const onStateChange = (e) => {
    let { value } = e.target;
    setCurrentState(value);
    onChange(value);
  };

  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-label">District</InputLabel>
      <Select value={currentState} onChange={onStateChange}>
        {state.map((currentState) => (
          <option key={currentState} value={currentState}>
            {currentState}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
export default CountryPicker;
