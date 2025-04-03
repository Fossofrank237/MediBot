import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ icon, title, description, action }) => {
  return (
    <div className="dashboard-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">{action} →</a>
    </div>
  );
};

export default DashboardCard;
