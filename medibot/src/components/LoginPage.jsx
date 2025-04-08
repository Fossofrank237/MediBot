import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`http://localhost:3002/users?email=${email}&password=${password}`);
      const users = await res.json();
  
      if (users.length > 0) {
        localStorage.setItem("user", JSON.stringify(users[0]));
        navigate("/dashboard");
      } else {
        alert("Email ou mot de passe incorrect");
      }
    } catch (error) {
      alert("Erreur lors de la connexion.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Connexion</h2>
        <label>Email :</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Mot de passe :</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Se connecter</button>
        <p style={{ textAlign: "center" }}>
        Pas encore inscrit ? <a href="/register">Créer un compte</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;