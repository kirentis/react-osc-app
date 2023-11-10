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

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Instruction" element={<Instruction />} />
          <Route path="/Iceberg" element={<Iceberg />} />
          <Route path="/Torpedo" element={<Torpedo />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
