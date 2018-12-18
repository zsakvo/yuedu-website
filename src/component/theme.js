import { createMuiTheme } from "@material-ui/core/styles";

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "#4dabf5",
      dark: "#1769aa"
    },
    secondary: {
      main: "#f50057",
      light: "#f73378",
      dark: "#ab003c"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default AppTheme;
