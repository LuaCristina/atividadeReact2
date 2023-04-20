import React from "react";

const UserCard = ({ name, title, description, photo }) => {
  return (
    <div className="user-card">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default UserCard;
