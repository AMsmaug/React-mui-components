import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: `32px` }} elevation={4}>
      <Stack
        sx={{ border: `1px solid` }}
        direction={`row`}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          /* component={`span`} */ sx={{
            backgroundColor: `primary.main`,
            color: `white`,
            height: `100px`,
            width: `100px`,
            padding: `16px`,
            "&:hover": {
              backgroundColor: `primary.light`,
            },
          }}
        >
          CodeEvolution
        </Box>
        <Box // there are some css properties that can be difined directly as react properties
          display={`flex`}
          width={`100px`}
          height={`100px`}
          p={2} // it's a numeric value that gets multiplied by 8px
          bgcolor={`success.light`}
        ></Box>
      </Stack>
      <Grid container my={4}>
        {/* you will find the explanation below the code */}
        <Grid item xs>
          <Box bgcolor={`primary.light`} p={2}>
            item 1
          </Box>
        </Grid>
        <Grid item xs /* xs={6} it will take 6 columns */>
          <Box bgcolor={`primary.light`} p={2}>
            item 2
          </Box>
        </Grid>
        <Grid item xs /* xs={`auto`} */>
          <Box bgcolor={`primary.light`} p={2}>
            item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor={`primary.light`} p={2}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

/* 
  ##############################
  ############ Grid ############
  ##############################

  - The Grid component under the hook uses the flexbox module.
  - The Grid consists of 12 columns.
  - Each item in the grid can take up one or more columns as its width.
  - There are five breakpoints each corresponding to a certain device width.
  - xs for mobile device size, sm for tablet, md for desktop, lg and xl for larger monitors.
  - We can assign integer values to each breakpoint which indicates how many of the 12 available
   columns are occupied by that item when the viewport satisfies that breakpoint constraints.
*/
