// oscUtility.js
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const sendOscMessage = (message) => {
  socket.emit("sendOsc", message);
};

export { sendOscMessage };
