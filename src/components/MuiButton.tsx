import {
  Stack,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

export const MuiButton = () => {
  const [format, setFormat] = useState<string[]>([]);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    console.log(updatedFormat);
    setFormat(updatedFormat);
  };
  return (
    <Stack spacing={4}>
      <Typography variant="h5">variants types</Typography>
      <Stack spacing={2} direction={`row`}>
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <br />
        <br />
        <hr />
        <br />
        <br />
      </Stack>
      <Typography variant="h5">Contained</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Typography variant="h5">Text</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>
      <Typography variant="h5">Outlined</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>
      <Typography variant="h5">Size controll</Typography>
      <Stack display={`block`} spacing={2} direction={`row`}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Typography variant="h5">Icons</Typography>
      <Stack spacing={2} direction={`row`}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <Button endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction={`row`}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          color="secondary"
          size="small"
          aria-label="alignment button group" // it helps in accessibility
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* --------------------------------------- */}
      <Stack direction={`row`}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatChange}
          size="small"
        >
          <ToggleButton value={`bold`} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={`italic`} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={`underlined`} aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

// MUI buttons are basically native buttons or ancher elements enhanced wiht material design.
