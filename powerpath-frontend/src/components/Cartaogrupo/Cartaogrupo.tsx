import React from "react";
import Image from "next/image";

type Integrante = {
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
  nome: string;
};

const TeamCard: React.FC<{ integrante: Integrante }> = ({ integrante }) => {
  return (
    <div className="team-card">
      <Image
        src={integrante.foto}
        alt={`Foto de ${integrante.nome}`}
        width={120}
        height={120}
        className="team-image"
      />
      <h2 className="team-name">{integrante.nome}</h2>
      <p className="team-info">RM: {integrante.rm}</p>
      <p className="team-info">Turma: {integrante.turma}</p>
      <div className="team-links">
        <a href={integrante.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" | "}
        <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default TeamCard;