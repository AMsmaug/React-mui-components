import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import BookMarkBorderIcon from "@mui/icons-material/BookMarkBorder";
import BookMarkIcon from "@mui/icons-material/BookMark";

export const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(e.target.checked);
  };
  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSkills((skills) =>
      isChecked ? [...skills, value] : skills.filter((skill) => skill !== value)
    );
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={acceptTnc}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookMarkBorderIcon />}
          checkedIcon={<BookMarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={`html`}
                  checked={skills.includes(`html`)}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={`css`}
                  checked={skills.includes(`css`)}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value={`js`}
                  checked={skills.includes(`js`)}
                  onChange={handleSkills}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
