import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([`in`]);
  return (
    <Box width={`250px`}>
      <TextField
        label="select country"
        select
        fullWidth
        value={countries}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setCountries(typeof value === `string` ? value.split(`,`) : value);
          console.log(e.target.value);
        }}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="us">USA</MenuItem>
        <MenuItem value="au">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
