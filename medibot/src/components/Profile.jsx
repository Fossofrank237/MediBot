import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "30px" }}>
      <h2>Mon Profil</h2>
      <p><strong>Nom :</strong> {user?.name}</p>
      <p><strong>Email :</strong> {user?.email}</p>
    </div>
  );
};

export default Profile;
