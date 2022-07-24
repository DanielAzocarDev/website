import React from "react";

import { Navbar } from "../navbar/Navbar";

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const Layout = ({ children }) => {
  const actions = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/danielazocardev/",
    },
    {
      icon: <TwitterIcon />,
      name: "Twitter",
      link: "https://twitter.com/danielazocardev",
    },
    {
      icon: <GitHubIcon />,
      name: "Github",
      link: "https://github.com/DanielAzocarDev",
    },
    {
      icon: <AlternateEmailIcon />,
      name: "Email",
      link: "mailto:danielazocarvelasquezdev@gmail.com",
    },
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
            href={action.link}
            target="_blank"
          />
        ))}
      </SpeedDial>
    </>
  );
};
