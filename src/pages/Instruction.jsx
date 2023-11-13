import React, { useState } from "react";
import { sendOscMessage } from "../components/oscUtility";

function PipeNumber({ placeholder, maxLength, formid }) {
  const [pipe, setPipe] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    setPipe(inputValue);
    sendOscMessage({
      url: `/UPDATE/SOS/LEIDING/STATUS`,
      name: inputValue,
    });
  };

  return (
    <div>
      <input
        className="form-control sos-location  caret-color"
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
  return (
    <div>
      <div className="container">
        <h1>INSTRUCTIES WATEROVERLAST</h1>

        <div className="row">
          <div className="col-6">
            <div className="co-container">
              <div>Geef leidingnumer</div>
              <PipeNumber placeholder="---" maxLength="3" id="1" />
            </div>
            <div className="sos-text-label">F11 = INSTRUCTIES OPVRAGEN</div>
          </div>

          <div className="col-4 instructions">
            <div className="row">
              INSTRUCTIES WATEROVERLAST
              <br />
              - Zet kraan V14 op 81% 
              <br />
              - Zet kraan V27 op 72%   
              <br />
              - Zet kraan V5 op 16%  
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
