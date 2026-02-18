import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Tutor from "./pages/Tutor";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/tutor" element={<Tutor />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;