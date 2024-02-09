import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "../ui/Link/Link";
import poloDigitalLogo from "../../assets/polo_digital_logo.png";
import { useAuthContext } from "../../contexts/AuthContext";
import {
  headerMenuOptions,
  headerMenuUser,
} from "../../const/headerMenuOptions";

export default function Header() {
  const { user, logout } = useAuthContext();
  const [openMenu, setOpenMenu] = useState(null);
  const [userMenu, setUserMenu] = useState(null);

  function handleOpenMenu(e) {
    setOpenMenu((currentState) => (currentState ? null : e.currentTarget));
  }

  function handleOpenUserMenu(e) {
    setUserMenu((currentState) => (currentState ? null : e.currentTarget));
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: "darkcyan",
        p: 2,
        display: { xl: "flex" },
        justifyContent: { xl: "center" },
      }}
    >
      <Grid container item sx={{ maxWidth: 1200 }}>
        <Grid item xs={2}>
          <Box
            component="img"
            src={poloDigitalLogo}
            sx={{ width: 150, display: { xs: "none", md: "inherit" } }}
          />
          <IconButton
            onClick={handleOpenMenu}
            sx={{ display: { xs: "inherit", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={openMenu}
            open={Boolean(openMenu)}
            onClose={handleOpenMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {headerMenuOptions.map((option) => (
              <MenuItem onClick={handleOpenMenu} key={option.label}>
                <Link to={option.linkTo}>{option.label}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
        <Grid
          item
          xs={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <Typography sx={{ minWidth: 100 }}>Home</Typography>
            </Link>
            {user
              ? headerMenuOptions.map((option) => {
                  if (option.label !== "Home") {
                    return (
                      <Link to={option.linkTo} key={option.label}>
                        <Typography sx={{ minWidth: 100 }}>
                          {option.label}
                        </Typography>
                      </Link>
                    );
                  }
                })
              : null}
          </Box>
          <Box
            component="img"
            src={poloDigitalLogo}
            sx={{ width: 150, display: { md: "none" } }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          {!user && (
            <Link to="/login">
              <Typography sx={{ minWidth: 100 }}>Login</Typography>
            </Link>
          )}
          {user && (
            <>
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar>{user.nombre.charAt(0)}</Avatar>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={userMenu}
                open={Boolean(userMenu)}
                onClose={handleOpenUserMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {headerMenuUser.map((option) => (
                  <MenuItem onClick={handleOpenUserMenu} key={option.label}>
                    <Link to={option.linkTo}>{option.label}</Link>
                  </MenuItem>
                ))}
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
