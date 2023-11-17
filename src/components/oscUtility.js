// oscUtility.js
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
const sis = {
  ip: "192.168.1.23",
  port: "3333",
};

const openstage = {
  ip: "localhost",
  port: "53001",
};

const destinations = {
  sis,
  openstage,
};
const sendOscMessage = ({ destination, address, data }) => {
  socket.emit("sendOsc", {
    ip: destination.ip,
    port: destination.port,
    address,
    data,
  });
};

// const sendOscMessage = ({ ip, port, address, data }) => {
//   socket.emit("sendOsc", { ip, address, port, data });
// };

export { sendOscMessage, destinations };
