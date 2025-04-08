// Nouveau Dashboard stylisé pour MediBot
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaUserCircle, FaSignOutAlt, FaHeartbeat, FaCommentDots } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <FaRobot size={32} /> MediBot
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => navigate("/profile")}><FaUserCircle /> Profil</li>
          <li onClick={() => navigate("/tips")}><FaHeartbeat /> Conseils Santé</li>
          <li onClick={() => navigate("/chatbot")}><FaCommentDots /> Chatbot</li>
          <li onClick={handleLogout}><FaSignOutAlt /> Déconnexion</li>
        </ul>
      </aside>
      <main className="dashboard-main">
        <h1>Bienvenue {user?.name || user?.email} 👋</h1>
        <p>Voici votre tableau de bord personnel sur MediBot.</p>
        <div className="dashboard-cards">
          <div className="card">📊 Statistiques santé</div>
          <div className="card">💡 Recommandations IA</div>
          <div className="card">🧠 Historique de conversation</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
