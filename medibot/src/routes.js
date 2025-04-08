import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Chatbot from "./components/Chatbot";
import HealthTips from "./components/HealthTips";

export default function AppRoutes() {
  const isLoggedIn = !!localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" />} />
        <Route path="/chatbot" element={isLoggedIn ? <Chatbot /> : <Navigate to="/" />} />
        <Route path="/tips" element={isLoggedIn ? <HealthTips /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
