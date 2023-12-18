import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import React, { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="form submitted successfully"
        autoHideDuration={3000}
        open={open}
        onClose={(_event: React.SyntheticEvent | Event, reason: string) => {
          if (reason === "clickaway") return;
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: `bottom`,
          horizontal: `center`,
        }}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert severity="success" onClose={handleClose}>
          Form Submitted succesfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
