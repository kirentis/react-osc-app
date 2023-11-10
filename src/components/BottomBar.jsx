// src/components/NavigationBar.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HandleKeyPress = (e, navigate) => {
  if (e.key === "Enter" && e.shiftKey) {
    console.log("Shift+Enter pressed");
    navigate("/Dashboard");
  }
};

function BottomBar() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Use useNavigate hook directly in the functional component

  useEffect(() => {
    const handleKeyPress = (e) => {
      HandleKeyPress(e, navigate); // Pass navigate to HandleKeyPress function
    };

    // Attach the event listener to the document to listen for global keypress events.
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts.
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]); // Include navigate in the dependency array

  return (
    <div className="sos-nav-bottom">
      <div className="col-6 sos-nav-bottom-left">
        (c) copyright 1988 – Titan IC Systems
      </div>
      <div className="col-6 sos-nav-bottom-right">F12 = {t("mainMenu")}</div>
    </div>
  );
}

export default BottomBar;
