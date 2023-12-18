import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

export const MuiRadioButton = () => {
  const [radio, setRadio] = useState(``);
  return (
    <Box>
      <FormControl /* here to set the error property */>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={radio}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRadio(e.target.value)
          }
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="success" />}
            label="0-2"
            value={`0-2`}
          />
          <FormControlLabel control={<Radio />} label="0-3" value={`0-3`} />
          <FormControlLabel control={<Radio />} label="0-4" value={`0-4`} />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
