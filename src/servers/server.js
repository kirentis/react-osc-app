const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { Client, Server: OSCServer } = require("node-osc");

app.use(cors());

const server = http.createServer(app);

//setup webSocke server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let oscServer; // Declare oscServer globally

//setup  websocket connection
io.on("connection", (socket) => {
  //console.log(`User Connected: ${socket.id}`); //log when user connects

  //receive osc data from clients
  socket.on("sendOsc", ({ ip, port, address, data }) => {
    // console.log(ip, port);
    // console.log("received_Osc_message from client", data); // log data from Client

    // send osc message to external clients
    const client = new Client(ip, port);
    client.send(address, data, (err) => {
      if (err) console.error(err);
      client.close();
    });
  });
});

//start server listining on osc port
server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});

//========setup osc server =========

oscServer = new OSCServer(5005, "0.0.0.0", () => {
  console.log("OSC Server is listening");
});

//when an osc message is sent from external client
// it is send to all clients
oscServer.on("message", function (msg) {
  //console.log(`Message: ${msg}`);
  if (msg[0] === "/language") {
    io.emit("language", msg[1]);
    return;
  }
  //send pong
  if (msg[0] === "/ping") {
    const client = new Client("192.168.1.60", "53000");
    client.send(`/cue/TR_SOS_REPLY_PONG/start`, "", (err) => {
      if (err) console.error(err);
      client.close();
    });
  }

  io.emit("receivedOsc", msg);
  //oscServer.close();
});
