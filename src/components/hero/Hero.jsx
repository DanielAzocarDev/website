import React from "react";

//Icons
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

// Style
import "./Hero.css";
import { IconButton, Tooltip } from "@mui/material";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__titles">
          <h1 className="hero__titles__title">React Developer</h1>
          <h3 className="hero__titles__subtitle">Daniel Azocar</h3>
        </div>

        <div className="hero__description">
          <p className="hero__description__text">
            Extensive experience helping clients to develop frontend
            applications for their websites and web apps using react.js
          </p>

          <Tooltip title="download my Resume" arrow>
            <IconButton
              color="primary"
              href="src/assets/DanielAzocarResume.pdf"
              download
            >
              <DownloadForOfflineIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
