import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/landing/index";
import Forgot from "./components/auth/forgot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ResetPass from "./components/auth/resetPass";
import Dashboard from "./components/dashboard/home";
import validateSession from "./components/services/validateSession";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
