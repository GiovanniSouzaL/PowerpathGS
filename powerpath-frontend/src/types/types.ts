export interface Activity {
  id: string;
  description: string;
  time: string;
}

export interface User {
  email: string;
  password: string;
}

export interface DashboardCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  customClass?: string;
}

export type ParceiroProps = {
  logo: string;
  name: string;
  description: string;
};

export type Integrante = {
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
  nome: string;
};

export type IconType = "charging_station" | "eco" | "route" | "medal" | "community";
export interface CardFuncionalidadeProps {
  titulo: string;
  descricao: string;
  icone: IconType;
}