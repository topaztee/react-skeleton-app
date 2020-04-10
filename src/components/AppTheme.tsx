import { Theme } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "../elements/mui";
import * as React from "react";
import { ReactNode } from "react";

const theme: Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    button: {
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#efa300",
      light: "rgba(0, 88, 239,0.2)",
      contrastText: "#fff"
    },
    secondary: {
      main: "rgba(21,239,160,0.7)",
      light: "rgba(0, 88, 239,0.2)",
      contrastText: "#fff"
    },
  },
  shape: {
    borderRadius: 10
  },
} as any);

export default function AppTheme(props: AppThemeProps) {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

interface AppThemeProps {
  children: ReactNode;
}
