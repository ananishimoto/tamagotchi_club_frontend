import { useState } from "react";
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
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import EditUserInfoForm from "../EditUserForm";
import { useNavigate } from "react-router-dom";

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

export default function LoggedIn(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [edit, setEdit] = useState(false);
  console.log("edit profile button", edit);

  const logout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFormClose = () => {
    setEdit(false);
  };

  return (
    <div className="loggedin">
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user?.name}</Nav.Item>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar alt="photo" src={user?.photoUrl}></Avatar>
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
        <MenuItem onClick={() => setEdit(true)}>Edit profile</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
      <EditUserInfoForm handleFormClose={handleFormClose} open={edit} />
    </div>
  );
}
