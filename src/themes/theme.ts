import { createMuiTheme, ThemeOptions } from "@material-ui/core";

const MuiTheme: ThemeOptions = {
  palette: {
    text: {
      primary: "#000000",
      secondary: "#222222",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `Sarabun, "Roboto", sans-serif`,
    fontWeightRegular: 300,
    fontWeightBold: 500,
    allVariants: { letterSpacing: 0.1 },
    h1: { fontSize: 44, fontWeight: 500 },
    h2: { fontSize: 38, fontWeight: 500 },
    h3: { fontSize: 32, fontWeight: 500 },
    h4: { fontSize: 24, fontWeight: 500 },
    h5: { fontSize: 20, fontWeight: 500 },
    subtitle1: { fontSize: 16, fontWeight: 500 },
    body1: { fontSize: 14, fontWeight: 300 },
    body2: { fontSize: 12, fontWeight: 300 },
    caption: { fontSize: 10, fontWeight: 300 },
    button: { fontSize: 16, fontWeight: 500 },
  },
};

export const CreateTheme = createMuiTheme(MuiTheme);
