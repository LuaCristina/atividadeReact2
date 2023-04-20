import { useState } from 'react'
import React from "react";
import "./App.css";
import UserCard from "./UserCard";

const Home = () => {
  const users = [
    {
      name: "Maria Latifa",
      title: "Desenvolvedora Senior",
      description: "Desenvolvedor web com experiência em React e Node.js",
      photo:
        "https://super.abril.com.br/wp-content/uploads/2021/07/SI_429_Oraculo_cachorrinho_FB.png"
    },
    {
      name: "Scott Jr",
      title: "Estagiário",
      description: "Desenvolvedor web com experiência em React e Node.js",
      photo:
        "https://conteudo.imguol.com.br/c/tab/0a/2021/01/14/a-pinscher-celebridade-bica-1610653437088_v2_3x4.jpg"
    },
    {
      name: "Ágata Ling",
      title: "CEO",
      description: "Desenvolvedor web com experiência em React e Node.js",
      photo:
        "https://i0.wp.com/petcaramelo.com/wp-content/uploads/2018/07/PINSCHER-BRAVO.jpg?resize=251%2C181&ssl=1"
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
