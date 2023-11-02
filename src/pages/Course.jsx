// src/components/Page2.js
import React from "react";

function Course() {
  return (
    <div>
      <h1>BEREKENEN KOERS</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>Coördinaat huidige locatie</div>
            <form>
              <div className="col-xs-2">
                <input
                  className="form-control sos-course1-1"
                  size="2"
                  maxlength="2"
                  style={{ fontFamily: "monospace" }}
                  type="text"
                  placeholder="--"
                />
              </div>
              <div className="col">
                <input
                  className="form-control sos-course1-2"
                  size="2"
                  maxlength="4"
                  style={{ fontFamily: "monospace" }}
                  type="text"
                  placeholder="----"
                />
              </div>
            </form>
          </div>
          <div className="col"></div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
