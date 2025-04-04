import React from 'react';
import DashboardCard from '../../Dashboard/DashboardCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <p>Bienvenue, Jean. Voici votre espace santé personnel.</p>

      <div className="card-grid">
        <DashboardCard
          icon="💬"
          title="Consultez notre chatbot"
          description="Posez vos questions médicales et obtenez des réponses en temps réel."
          action="Démarrer une conversation"
        />
        <DashboardCard
          icon="❤️"
          title="Conseils personnalisés"
          description="Recommandations de santé adaptées à votre profil et vos symptômes."
          action="Voir mes conseils"
        />
        <DashboardCard
          icon="🕒"
          title="Historique de conversation"
          description="Consultez vos échanges précédents avec notre chatbot médical."
          action="Voir l'historique"
        />
      </div>
    </div>
  );
};

export default Dashboard;
