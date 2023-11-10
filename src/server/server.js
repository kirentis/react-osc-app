const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const { Client, Server } = require("node-osc");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.use((req, res, next) => {
  console.log("CORS middleware applied");
  cors()(req, res, next);
});

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("WebSocket connected");

  // Handle WebSocket events here

  socket.on("disconnect", () => {
    console.log("WebSocket disconnected");
  });
});

// Handle OSC messages
const oscServer = new Server(3001, "localhost");

oscServer.on("listening", () => {
  console.log("OSC Server is listening.");
});

oscServer.on("message", (msg) => {
  console.log(`OSC Message: ${msg}`);
  // Emit the OSC message to all connected WebSocket clients
  io.emit("oscMessage", msg);

  // You can perform actions on all React pages based on the received OSC message here
  // For example:
  // io.emit("performAction", msg);
});

// Function to send OSC message from React pages
const sendOSCMessage = (address, args) => {
  const oscClient = new Client("0.0.0.0", 53000);
  oscClient.send(address, args, (err) => {
    if (err) console.error(err);
    oscClient.close();
  });
};

// Example: You can call this function from React pages to send OSC messages
// sendOSCMessage("/example", ["arg1", "arg2"]);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the necessary objects/functions for use in React pages
module.exports = { io, sendOSCMessage };
