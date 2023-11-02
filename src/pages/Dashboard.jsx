import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function BottomBar() {
  const navigate = useNavigate();

  const keyActions = useMemo(() => {
    return {
      F1: () => navigate("/Course"),
      F2: () => navigate("/Instruction"),
      F3: () => navigate("/page3"),
      F4: () => navigate("/page4"),
      F5: () => navigate("/page5"),
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
      <h1>HOOFDMENU</h1>
      <p>Druk op de functietoets voor het gewenste programma.</p>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>F1</td>
            <td>Bereken koers</td>
          </tr>
          <tr>
            <td>F2</td>
            <td>Instructies wateroverlast</td>
          </tr>
          <tr>
            <td>F3</td>
            <td>Detectiesysteem ijsbergen</td>
          </tr>
          <tr>
            <td>F4</td>
            <td>Torpedo lanceersysteem</td>
          </tr>
          <tr>
            <td>F5</td>
            <td>Pong</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BottomBar;
