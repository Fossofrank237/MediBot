import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      // Vérifier si l'email est déjà utilisé
      const response = await fetch(`http://localhost:3002/users?email=${email}`);
      const data = await response.json();

      if (data.length > 0) {
        alert("Un utilisateur avec cet email existe déjà !");
      } else {
        // Créer le nouvel utilisateur
        const newUser = { name, email, password };
        await fetch("http://localhost:3002/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        alert("Inscription réussie !");
        navigate("/");
      }
    } catch (error) {
      alert("Erreur lors de l'inscription.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Inscription</h2>

        <label>Nom complet :</label>
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email :</label>
        <input
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mot de passe :</label>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;
