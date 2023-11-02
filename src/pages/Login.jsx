import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    sendOSCMessage({ name: e.target.value });
  };
  const handleSubmit = () => {
    console.log(password);
    // Basic password validation - replace with your logic.
    if (password === "1234") {
      // Redirect to Page 1 if the password is correct.
      navigate("/Dashboard");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const asciiArt = `
  #####  #######  #####  
 #     # #     # #     # 
 #       #     # #       
  #####  #     #  #####  
       # #     #       # 
 #     # #     # #     # 
  #####  #######  #####  
 `;

  return (
    <div>
       <div className="sos-form-container col-md-8 mx-auto">
<pre className="ascii-art-pre">{asciiArt}</pre>
      
      <h2>SHIP OPERATING SYSTEM</h2>
     
        <div> {error && <p>{error}</p>}</div>
        <form>
          <input
            className="form-control"
            font-family="monospace"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
          />
          <label className="sos-password-form">
            Fill in password and press Enter
          </label>
        </form>
      </div>
    </div>
  );
}

const sendOSCMessage = async (data) => {
  try {
    //const data = { name: "Erik" };
    await axios.post("http://localhost:9000/send-osc", data);
    console.log("OSC message sent successfully");
  } catch (error) {
    console.error("Error sending OSC message", error);
  }
};

export default HomePage;
