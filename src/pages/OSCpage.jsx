import io from "socket.io-client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

const OSCpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleReceivedOsc = (data) => {
      navigate(data[0]);
      console.log("OSC message received from server" + data);
    };

    socket.on("receivedOsc", handleReceivedOsc);

    return () => {
      // Clean up the event listener when the component is unmounted
      socket.off("receivedOsc", handleReceivedOsc);
    };
  }, [navigate]);

  return null;
};

export default OSCpage;
