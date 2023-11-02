// src/App.js
import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Instruction from "./pages/Instruction";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Instruction" element={<Instruction />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
