import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0D2436",
    secondary: "#009B86",
    tertiary: "#57e9d6",
    white: "#FFFFFF",
    lightGray: "#CCCCCC",
    green: "#009b5a",
  },
  fonts: `sans-serif,'Roboto'`,
  breakPoints: {
    xs: `576px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xlg: `1200px`,
    xxlg: `1400px`,
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
