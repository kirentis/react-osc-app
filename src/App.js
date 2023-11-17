import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Instruction from "./pages/Instruction";
import Iceberg from "./pages/Iceberg";
import Torpedo from "./pages/Torpedo";
import OSCpage from "./pages/OSCpage";
import Blackoutpage from "./pages/BlackoutPage";
import LanguageSwitcher from "./languages/languageSwitcher";

function App() {
  const [showBars, setShowBars] = useState(true);

  useEffect(() => {
    const socket = io.connect("http://localhost:3001");

    socket.addEventListener("receivedOsc", (event) => {
      if (event[0] === "/BlackoutPage") {
        setShowBars(false);
      } else {
        setShowBars(true);
      }
    });

    return () => {
      // Clean up WebSocket connection
      socket.close();
    };
  }, []);

  return (
    <Layout>
      <BrowserRouter>
        <OSCpage />
        {showBars && <TopBar />}
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Instruction" element={<Instruction />} />
          <Route path="/Iceberg" element={<Iceberg />} />
          <Route path="/Torpedo" element={<Torpedo />} />
          <Route path="/Blackoutpage" element={<Blackoutpage />} />
        </Routes>
        {showBars && <BottomBar />}
      </BrowserRouter>
    </Layout>
  );
}

export default App;
