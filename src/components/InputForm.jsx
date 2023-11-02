import React, { useState } from "react";

function TheInputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "F1") {
      console.log("F1 key was pressed");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type here..."
      />
    </div>
  );
}

export default TheInputForm;
