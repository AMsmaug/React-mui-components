import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Box>
      <FormControlLabel
        label="dark mode"
        control={
          <Switch
            checked={checked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChecked(e.target.checked)
            }
          />
        }
      />
    </Box>
  );
};
