import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BottomBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const keyActions = useMemo(() => {
    return {
      F1: () => navigate("/Course"),
      F2: () => navigate("/Instruction"),
      F3: () => navigate("/Iceberg"),
      F4: () => navigate("/Torpedo"),
      // Add more key actions as needed
    };
  }, [navigate]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = `${e.key}`;
      console.log(`F${e.key} PRESSED`);

      if (keyActions[key]) {
        keyActions[key]();
      }
    };

    const handleKeyDown = (e) => {
      handleKeyPress(e);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyActions]);

  return (
    <div>
      <h1>{t("mainMenu")}</h1>
      <p>{t("pressFuntionKey")}</p>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>F1 - </td>
            <td>{t("calculateCourse")}</td>
          </tr>
          <tr>
            <td>F2 - </td>
            <td>{t("floodInstructions")}</td>
          </tr>
          <tr>
            <td>F3 - </td>
            <td>{t("icebegDetection")}</td>
          </tr>
          <tr>
            <td>F4 - </td>
            <td>{t("torpedoLaunch")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BottomBar;
