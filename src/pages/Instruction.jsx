import React, { useState, useEffect } from "react";
import { sendOscMessage, destinations } from "../components/oscUtility";
import { useTranslation } from "react-i18next";

function PipeNumber({ placeholder, maxLength, formid, onF11Press }) {
  const [pipe, setPipe] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setPipe(inputValue);
  };

  useEffect(() => {
    sendOscMessage({
      destination: destinations.openstage,
      address: `/UPDATE/SOS/INSTRUCTIE/STATUS`,
      data: pipe,
    });
  }, [pipe]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "F11") {
        onF11Press(pipe);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onF11Press, pipe]);

  return (
    <div>
      <input
        className="form-control sos-location caret-color"
        type="text"
        id={formid}
        value={pipe}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleInputChange}
      />
    </div>
  );
}

function Instruction() {
  const { t } = useTranslation();
  const [instructionVisible, setInstructionVisible] = useState(false);
  const [error, setError] = useState("");

  const validateInput = (inputValue) => {
    // Add your validation logic here
    // For example, check if the inputValue meets certain criteria
    if (inputValue === "A02") {
      setInstructionVisible(true);
      setError("");
    } else {
      setInstructionVisible(false);
      setError("Invalid input. Please enter a valid value.");
    }
  };

  return (
    <div>
      <div className="container">
        <h1>{t("WO_floodinstructionsTitle")}</h1>

        <div className="row">
          <div className="col-6">
            <div className="co-container">
              <div>{t("WO_providePipeNumber")}</div>

              <PipeNumber
                placeholder="---"
                maxLength="3"
                formid="1"
                onF11Press={validateInput}
              />
            </div>
            <div className="sos-text-label">
              F11 = {t("WO_requestInstructions")}
            </div>
          </div>

          <div className="col-4 instructions">
            {error && <div className="error-message">{error}</div>}
            {instructionVisible && (
              <div className="row">
                {t("WO_resetInstructions")}
                <br />
                {t("WO_setValve14")}
                <br />
                {t("WO_setValve27")}
                <br />
                {t("WO_setValve3")}
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
