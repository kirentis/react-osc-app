const express = require("express");
const { Client, Server } = require("node-osc");
const cors = require("cors");

const app = express();
const port = 9000;

// Middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the cors middleware to enable CORS
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Create an OSC server that listens on port 3333
const oscServer = new Server(9000, "0.0.0.0", () => {
  console.log("OSC Server is listening");
});

// Define a route to receive OSC messages and respond to HTTP requests
app.post("/send-osc", (req, res) => {
  //console.log("GELUKT");
  console.log(req.body.name);
  const client = new Client("127.0.0.1", 7000);
  client.send("/oscAddress", 200, () => {
    //console.log("GESTUURD");
  });
});

oscServer.on("message", function (msg) {
  console.log(`Message: ${msg}`);
  //oscServer.close();
});
