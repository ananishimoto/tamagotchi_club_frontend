import { createTheme, Link } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff9800",
      main: "#fb8c00",
      dark: "#e65100",
      contrastText: "#fff",
    },
  },
});

export default function LoggedOut() {
  return (
    <>
      <Link
        href="/login"
        color="inherit"
        underline="none"
        theme={theme}
        className="custom-link"
      >
        LOGIN
      </Link>
    </>
  );
}
