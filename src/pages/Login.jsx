import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function HomePage() {
const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    //sendOSCMessage({ name: e.target.value });
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
            fontFamily="monospace"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
          />
          <label className="sos-password-form">
          {t('passwordMessage')}
          </label>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
