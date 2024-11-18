import React from "react";
import TeamCard from "@/components/Cartaogrupo/Cartaogrupo";

const integrantes = [
  {
    rm: "556536",
    turma: "1TDSPH",
    foto: "/giovanni.png",
    github: "https://github.com/GiovanniSouzaL",
    linkedin: "https://www.linkedin.com/in/giovanni-de-souza-lima-64684a217/",
    nome: "Giovanni de Souza Lima",
  },
  {
    rm: "559105",
    turma: "1TDSPH",
    foto: "/vitor.png",
    github: "https://github.com/ovitortadeu",
    linkedin: "https://linkedin.com/in/ovitortadeu",
    nome: "Vitor Tadeu Soares de Sousa",
  },
  {
    rm: "556370",
    turma: "1TDSPH",
    foto: "/pedro.png",
    github: "https://github.com/PBPedro",
    linkedin: "https://linkedin.com/",
    nome: "Pedro Paulo Barretta",
  },
];

const TeamPage: React.FC = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Nosso Time</h1>
      <div className="team-grid">
        {integrantes.map((integrante, index) => (
          <TeamCard key={index} integrante={integrante} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
