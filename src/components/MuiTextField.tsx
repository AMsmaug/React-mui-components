import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState(``);
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction={`row`} spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack direction={`row`} spacing={2}>
          <TextField
            label="small secondary"
            size="small"
            color="secondary"
            variant="outlined"
          />
        </Stack>
        <Stack direction={`row`} spacing={2}>
          <TextField
            type="password"
            label="Password"
            helperText="DO NOT SHARE YOUR PASSWORD WITH ANYONE"
            disabled
          />
        </Stack>
        <Stack direction={`row`} spacing={2}>
          <TextField label="Read only" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack direction={`row`} spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            value={value}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            error={!value}
            helperText={
              !value ? `Required` : `Do not share you password to anyone`
            }
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            value={value}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            error={!value}
            helperText={
              !value ? `Required` : `Do not share you password to anyone`
            }
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
};
