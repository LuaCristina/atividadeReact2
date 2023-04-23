import { useState } from 'react'
import React from "react";
import "./App.css";
import UserCard from "./UserCard";

const Home = () => {
  const users = [
    {
      name: "Ana Bruck",
      title: "Eu recomendo a letícia, pois o atendimento dela fez toda a diferença",
      description: "\"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de uma proffisonal qualificada poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\"",
      photo:
        "https://img.freepik.com/fotos-gratis/retrato-de-mulher-feliz-rindo_23-2148850676.jpg?w=2000"
    },
    {
      name: "Ana Bruck",
      title: "Eu recomendo a letícia, pois o atendimento dela fez toda a diferença",
      description: "\"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de uma proffisonal qualificada poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\"",
      photo:
        "https://img.freepik.com/fotos-gratis/retrato-de-mulher-feliz-rindo_23-2148850676.jpg?w=2000"
    },
    {
      name: "Ana Bruck",
      title: "Eu recomendo a letícia, pois o atendimento dela fez toda a diferença",
      description: "\"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de uma proffisonal qualificada poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\"",
      photo:
        "https://img.freepik.com/fotos-gratis/retrato-de-mulher-feliz-rindo_23-2148850676.jpg?w=2000"
    }
  ];

  return (
    <div className="App">
      <div className="user-card-container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            title={user.title}
            description={user.description}
            photo={user.photo}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
