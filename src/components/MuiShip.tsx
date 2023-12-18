import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiShip = () => {
  const [chips, setChips] = useState([`chip 1`, `chip 2`, `chip 3`]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction={`row`} spacing={1} m={4}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert(`Clicked`)} />
      <Chip
        label="Delete"
        color="error"
        onDelete={() => alert(`delete handler called`)}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
