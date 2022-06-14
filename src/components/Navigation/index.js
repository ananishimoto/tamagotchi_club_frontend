import React from "react";
import "./style.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  createTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

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

const Navigation = () => {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <AppBar position="static" theme={theme}>
      <Toolbar className="navbar">
        <div>
          <Typography variant="h5" component="span">
            <Link
              href="/"
              color="inherit"
              underline="none"
              variant="h5"
              hover="none"
              className="custom-link"
            >
              {" "}
              Tamagotchi CLUB{" "}
            </Link>
          </Typography>
        </div>
        <div>
          <Button color="inherit">
            <Link
              href="/"
              color="inherit"
              underline="none"
              theme={theme}
              className="custom-link"
            >
              Home Page
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/club"
              color="inherit"
              underline="none"
              className="custom-link"
            >
              Club
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/tips"
              color="inherit"
              underline="none"
              className="custom-link"
            >
              Tips
            </Link>
          </Button>
        </div>
        <div className="loggedin">
          <Button color="inherit"></Button>
          {loginLogoutControls}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export { Navigation };
