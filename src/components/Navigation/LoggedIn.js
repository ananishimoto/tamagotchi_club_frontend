import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import {
  Avatar,
  Button,
  createTheme,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

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

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="loggedin">
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user?.name}</Nav.Item>
      <Button color="inherit" onClick={() => dispatch(logOut())}>
        <Link
          href="/login"
          color="inherit"
          underline="none"
          theme={theme}
          className="custom-link"
        >
          Logout
        </Link>
      </Button>
      <Link href="/profile">
        <Avatar alt="photo" src={user?.photoUrl}></Avatar>
      </Link>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ArrowDropDownCircleIcon fontSize="large" sx={{ color: "#c2185b" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            href="/profile"
            className="custom-link"
            color="inherit"
            underline="none"
            theme={theme}
          >
            Profile page
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Edit profile</MenuItem>
      </Menu>
    </div>
  );
}
