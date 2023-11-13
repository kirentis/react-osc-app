// oscHandler.js
const oscServer = require("../server/server");

const handleOSCMessage = (callback) => {
  oscServer.on("oscMessage", (msg) => {
    console.log("Received OSC message:", msg);
    callback(msg); // Call the provided callback function with the OSC message
  });
};

module.exports = handleOSCMessage;
