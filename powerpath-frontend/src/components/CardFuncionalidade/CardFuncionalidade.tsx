import React from "react";
import { FaChargingStation, FaLeaf, FaRoute, FaMedal, FaUsers } from "react-icons/fa";

// Define o tipo exato das chaves aceitas para o ícone
type IconType = "charging_station" | "eco" | "route" | "medal" | "community";

// Define as propriedades do componente, incluindo o ícone
type CardFuncionalidadeProps = {
  titulo: string;
  descricao: string;
  icone: IconType;
};

// Mapeamento dos ícones: cada chave corresponde ao nome que será passado para `icone`
const Icones: Record<IconType, JSX.Element> = {
  charging_station: <FaChargingStation />,
  eco: <FaLeaf />,
  route: <FaRoute />,
  medal: <FaMedal />,
  community: <FaUsers />
};

const CardFuncionalidade: React.FC<CardFuncionalidadeProps> = ({ titulo, descricao, icone }) => {
  return (
    <div className="card-funcionalidade">
      <div className="icon">{Icones[icone]}</div>
      <h3 className="card-title">{titulo}</h3>
      <p className="card-description">{descricao}</p>
    </div>
  );
};

export default CardFuncionalidade;
