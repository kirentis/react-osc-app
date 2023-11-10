import io from "socket.io-client";

// Connect to the WebSocket server
const socket = io("http://localhost:3002"); // Replace with your server URL
socket.on("connect", () => {
  console.log("Connected to server");
  console.log("Socket connected:", socket.connected);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("connect_error", (err) => {
  console.error(`Connect error: ${err.message}`);
});

socket.on("oscMessage", (msg) => {
  console.log("Received OSC Message:", msg[1]);
  console.log(typeof msg);
  // Handle the OSC message in your React app
});

export default socket;
