import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".9rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Daniel
          </Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Daniel Azocar" src="src/assets/profile.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
