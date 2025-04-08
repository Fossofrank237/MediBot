import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Bienvenue {user?.email} sur MediBot !</h2>
      <p>Vous êtes connecté à votre espace personnel.</p>
      <button onClick={handleLogout} style={styles.button}>Déconnexion</button>
    </div>
  );
};

const styles = {
  container: {
    margin: "60px auto",
    maxWidth: "600px",
    padding: "40px",
    background: "#f4f4f4",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default Dashboard;