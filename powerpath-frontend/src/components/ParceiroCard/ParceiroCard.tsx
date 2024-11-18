import React from "react";
import Image from "next/image";

interface ParceiroProps {
  logo: string;
  name: string;
  description: string;
}

const ParceiroCard: React.FC<ParceiroProps> = ({ logo, name, description }) => {
  return (
    <div className="partner-card">
      <Image src={logo} alt={`${name} logo`} width={100} height={100} />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ParceiroCard;
