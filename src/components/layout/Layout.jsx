import React from "react";

import { Navbar } from "../navbar/Navbar";

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const Layout = ({ children }) => {
  const actions = [
    { icon: <LinkedInIcon />, name: "LinkedIn" },
    { icon: <InstagramIcon />, name: "Instagram" },
    { icon: <TwitterIcon />, name: "Twitter" },
    { icon: <AlternateEmailIcon />, name: "Email" },
  ];

  return (
    <>
      <Navbar />
      {children}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  );
};
