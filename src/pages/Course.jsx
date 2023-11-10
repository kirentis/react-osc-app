import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ValidationPage = () => {
  const { t } = useTranslation();
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  let [error, setError] = useState("");
  const [course, setCourse] = useState("");

  const arrays = [
    ["123456", "123456", "123456", "123456"],
    ["111111", "111111", "111111", "111111"],
  ];

  const validateInput = () => {
    for (let i = 0; i < arrays.length; i++) {
      const isValid = inputValues.every(
        (value, index) => value === arrays[i][index]
      );

      if (isValid) {
        //send OSC MESSAGE

        setCourse(i + 1);
        setError("");
        return true;
      }
    }
    setError("Validation failed");
    //send OSC MESSAGE
    setCourse("");
    return false;
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleKeyPress = (e) => {
    if (e.shiftKey && e.key === "L") {
      if (validateInput()) {
        setError("");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div>
      <div className="row">
        <h1>BEREKENEN KOERS</h1>
        <div className="col-6">
          <div className="co-container co-1">
            <div>Coördinaat huidige locatie</div>
            <input
              className="form-control sos-location caret-color"
              type="text"
              value={inputValues[0]}
              onChange={(e) => handleInputChange(0, e.target.value)}
              maxLength={6}
              placeholder="------"
            />
            <input
              className="form-control sos-location caret-color"
              type="text"
              value={inputValues[1]}
              onChange={(e) => handleInputChange(1, e.target.value)}
              maxLength={6}
              placeholder="------"
            />
          </div>
          <div className="co-container co-1">
            <div>Coördinaat gewenste bestemming</div>
            <input
              className="form-control sos-location caret-color"
              type="text"
              value={inputValues[2]}
              onChange={(e) => handleInputChange(2, e.target.value)}
              maxLength={6}
              placeholder="------"
            />
            <input
              className="form-control sos-location caret-color"
              type="text"
              value={inputValues[3]}
              onChange={(e) => handleInputChange(3, e.target.value)}
              maxLength={6}
              placeholder="------"
            />
          </div>
          <div className="sos-text-label">F11 = {t("calculate")}</div>
          <div className="col co-container">
            {error && <p>{error}</p>}
            {course === 1 && <p>De Koers is 78 graden</p>}
            {course === 2 && <p>De Koers is 32 graden</p>}
          </div>
        </div>
        <div className="col-4 instructions">
          <div className="row">
            {t("instructions")}
            <br />- {t("autoPilotOff")}
            <br />- {t("turnWheel")}
            <br />- {t("setCourse")}
            <br />- {t("autoPilotOn")}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationPage;
