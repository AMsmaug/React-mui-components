import "./App.css";
import { MuiBadge } from "./components/MuiBadge";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiList } from "./components/MuiList";
import { MuiNavBar } from "./components/MuiNavBar";
import { MuiShip } from "./components/MuiShip";
import { MuiSpeedDial } from "./components/MuiSpeedDial";
import { MuiTooltip } from "./components/MuiTooltip";
import { MuiAvatar } from "./components/MuiAvatar";
import { MuiImageList } from "./components/MuiImageList";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiRating } from "./components/MuiRating";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiSelect } from "./components/MuiSelect";
import { MuiButton } from "./components/MuiButton";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "./components/MuiTextField";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiLayout } from "./components/MuiLayout";
import { MuiCard } from "./components/MuiCard";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiLink } from "./components/MuiLink";
import { MuiTable } from "./components/MuiTable";
import { MuiAlert } from "./components/MuiAlert";
import { MuiSnackbar } from "./components/MuiSnackbar";
import { MuiDialog } from "./components/MuiDialog";
import { Typography } from "@mui/material";
import { MuiProgress } from "./components/MuiProgress";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiLoadingButton } from "./components/MuiLoadingButton";
import { MuiTabs } from "./components/MuiTabs";
import { MuiTimeline } from "./components/MuiTimeline";
import { MuiMasonry } from "./components/MuiMasonry";
import { MuiResponsiveness } from "./MuiResponsiveness";
// import { createTheme, colors, ThemeProvider } from "@mui/material";

// const theme = createTheme({
//   status: {
//     danger: `#e53e3e`,
//   },
//   palette: {
//     primary: {
//       main: `1`,
//     },
//     secondary: {
//       main: colors.orange[500],
//     },
//   },
// });
function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <MuiNavBar />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiTypography
      </Typography>
      <MuiTypography />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiButton
      </Typography>
      <MuiButton />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiTextField
      </Typography>
      <MuiTextField />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiSelect
      </Typography>
      <MuiSelect />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiRadioButton
      </Typography>
      <MuiRadioButton />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiCheckbox
      </Typography>
      <MuiCheckbox />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiSwitch
      </Typography>
      <MuiSwitch />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiRating
      </Typography>
      <MuiRating />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiAutocomplete
      </Typography>
      <MuiAutocomplete />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiLayout
      </Typography>
      <MuiLayout />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiCard
      </Typography>
      <MuiCard />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiAccordion
      </Typography>
      <MuiAccordion />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiImageList
      </Typography>
      <MuiImageList />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiLink
      </Typography>
      <MuiLink />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiBreadcrumbs
      </Typography>
      <MuiBreadcrumbs />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiDrawer
      </Typography>
      <MuiDrawer />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiSpeedDial
      </Typography>
      <MuiSpeedDial />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiAvatar
      </Typography>
      <MuiAvatar />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiBadge
      </Typography>
      <MuiBadge />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiList
      </Typography>
      <MuiList />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiShip
      </Typography>
      <MuiShip />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiTooltip
      </Typography>
      <MuiTooltip />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiTable
      </Typography>
      <MuiTable />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiAlert
      </Typography>
      <MuiAlert />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiSnackbar
      </Typography>
      <MuiSnackbar />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiDialog
      </Typography>
      <MuiDialog />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiProgress
      </Typography>
      <MuiProgress />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiSkeleton
      </Typography>
      <MuiSkeleton />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiLoadingButton
      </Typography>
      <MuiLoadingButton />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiTabs
      </Typography>
      <MuiTabs />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiTimeline
      </Typography>
      <MuiTimeline />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiMasonry
      </Typography>
      <MuiMasonry />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiResponsiveness
      </Typography>
      <MuiResponsiveness />
      <br />
      <hr />
      <br />
      <Typography variant="h4" gutterBottom p={2}>
        MuiBottomNavigation
      </Typography>
      <MuiBottomNavigation />
    </div>
    // </ThemeProvider>
  );
}

export default App;
