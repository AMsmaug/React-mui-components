import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={`row`} m={4}>
      <Link href="#">Link</Link>
      <Typography>
        <Link
          variant="h6" /* it is just like typography */
          href="#"
          color={`secondary`}
          /* underline="hover" */
          underline="none"
        >
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
