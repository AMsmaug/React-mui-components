import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">This is heading</Typography> {/* h1 */}
      <Typography variant="h2">This is heading</Typography> {/* h2 */}
      <Typography variant="h3">This is heading</Typography> {/* h3 */}
      <Typography variant="h4">This is heading</Typography> {/* h4 */}
      <Typography variant="h5" component={`h1`} gutterBottom>
        {" "}
        {/* h1 */}
        This is heading
      </Typography>
      <Typography variant="h6">This is heading</Typography> {/* h6 */}
      <Typography variant="subtitle1">Sub title 1</Typography> {/* h6 */}
      <Typography variant="subtitle2">Sub title 2</Typography> {/* h6 */}
      <Typography variant="body1">body 1 (default)</Typography> {/* p */}
      <Typography variant="body2">body 2</Typography> {/* p */}
      <br />
      <br />
      <hr />
      <br />
      <br />
    </div>
  );
};
