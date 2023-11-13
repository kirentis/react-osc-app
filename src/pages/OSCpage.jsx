import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOscMessage } from "../components/oscUtility";

const socket = io.connect("http://localhost:3001");

const OSCpage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  //const [messageReceived, setMessageReceived] = useState("");

  useEffect(() => {
    socket.on("receivedOsc", (data) => {
      //setMessageReceived(data);
      navigate(data[0]);
      console.log("OSC message received from server" + data);
    });
  }, [navigate]);

  return <></>;
};

export default OSCpage;
