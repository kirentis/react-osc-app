import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { sendOscMessage, destinations } from "../components/oscUtility";

const ValidationPage = () => {
  let theCourse = "";
  const { t } = useTranslation();
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  let [error, setError] = useState("");
  const [course, setCourse] = useState("");

  const rangeValidation = [
    [
      { min: 292288, max: 295085 }, // Eerste keer huidige locatie
      { min: 718505, max: 724888 }, // Eerste keer huidige locatie
      { min: 303842, max: 303842 }, // Eerste keer haven - Mayport
      { min: 814153, max: 814153 }, // Eerste keer haven - Mayport
      //koers 278 graden
    ],
    [
      { min: 292288, max: 295085 }, // Tweede keer keer huidige locatie
      { min: 718505, max: 724888 }, // Tweede keer keer huidige locatie
      { min: 303842, max: 303842 }, // Eerste keer haven - Mayport
      { min: 814153, max: 814153 }, // Eerste keer haven - Mayport
      //koers 297 graden
    ],
    [
      { min: 292288, max: 295085 }, // Tweede keer keer huidige locatie
      { min: 718505, max: 724888 }, // Tweede keer keer huidige locatie
      { min: 254324, max: 254324 }, // Tweede keer naar het eiland
      { min: 704557, max: 704557 }, // Tweede keer naar het eiland
      //koers 117 graden
    ],
  ];

  const validateInput = () => {
    for (let i = 0; i < rangeValidation.length; i++) {
      const isValid = inputValues.every((value, index) => {
        const { min, max } = rangeValidation[i][index];
        // Perform the range check for each array entry
        return parseInt(value) >= min && parseInt(value) <= max;
      });

      if (isValid) {
        setCourse(i + 1);

        //send OSC MESSAGE
        sendOscMessage({
          destination: destinations.sis,
          address: "/set_target_course",
          data: theCourse,
        });
        setError("");
        return true;
      }
    }
    setError("Validation failed");
    //send OSC MESSAGE
    return false;
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    sendOscMessage({
      destination: destinations.openstage,
      address: `/UPDATE/SOS/COURSE${index + 1}/STATUS`,
      data: value,
    });
  };

  const handleKeyPress = (e) => {
    if (e.shiftKey && e.key === "L") {
      if (validateInput()) {
        setError("ERROR");
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
        <h1>{t("KRS_calculateCourse")}</h1>
        <div className="col-6">
          <div className="co-container co-1">
            <div> {t("KRS_actualCoordinate")}</div>
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
            <div>{t("KRS_desiredCoordinate")}</div>
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
          <div className="sos-text-label">F11 = {t("KRS_calculate")}</div>
          <div className="col co-container">
            {error && <p>{error}</p>}
            {course === 1 && <p>De Koers is 278 graden</p>}
            {course === 2 && <p>De Koers is 297 graden</p>}
            {course === 3 && <p>De Koers is 117 graden</p>}
          </div>
        </div>
        <div className="col-4 instructions">
          <div className="row">
            {t("KRS_instructions")}
            <br />
            Stap 1 {t("KRS_autoPilotOff")}
            <br />
            Stap 2 {t("KRS_turnWheel")}
            <br />
            Stap 3 {t("KRS_setCourse")}
            <br />
            Stap 4 {t("KRS_autoPilotOn")}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationPage;
