import React from 'react';
import './Sidebar.css'; // style dédié

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">🩺 MédiConseil</h2>
      <div className="sidebar-user">
        <div className="avatar">JD</div>
        <div className="user-info">
          <p>Jean Dupont</p>
          <small>jean.dupont@email.com</small>
        </div>
      </div>
      <nav className="sidebar-nav">
        <a className="active">🧩 Tableau de bord</a>
        <a>💬 Consulter le chatbot</a>
        <a>🕒 Historique</a>
        <a>❤️ Conseils personnalisés</a>
        <a>👤 Mon profil</a>
      </nav>
      <a className="logout">🚪 Déconnexion</a>
    </aside>
  );
};

export default Sidebar;
