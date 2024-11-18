"use client";

import React, { useState } from "react";
import CardFuncionalidade from "@/components/CardFuncionalidade/CardFuncionalidade";
import { useRouter } from "next/navigation";

const funcionalidades = [
  {
    titulo: "Localização de Pontos de Recarga",
    descricao: "Encontre pontos de recarga próximos e veja informações sobre disponibilidade, custo e tipo de carregador.",
    icone: "charging_station",
  },
  {
    titulo: "Economia e Impacto Ambiental",
    descricao: "Veja o quanto você economiza e as emissões de CO₂ evitadas ao usar um veículo elétrico.",
    icone: "eco",
  },
  {
    titulo: "Planejamento de Rotas",
    descricao: "Planeje viagens com paradas estratégicas para recarga, considerando o nível da bateria e tempo de viagem.",
    icone: "route",
  },
  {
    titulo: "Gamificação",
    descricao: "Participe de desafios, ganhe recompensas e suba no ranking de sustentabilidade.",
    icone: "medal",
  },
  {
    titulo: "Comunidade",
    descricao: "Compartilhe experiências e obtenha dicas de outros usuários de veículos elétricos.",
    icone: "community",
  },
];

const FuncionalidadesPage: React.FC = () => {
  const router = useRouter();

  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Controle do modo de registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para registrar o usuário
  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email]) {
      alert("E-mail já registrado. Tente outro ou faça login.");
      return;
    }

    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Usuário registrado com sucesso!");
    setIsRegistering(false); // Troca para o modo de login
  };

  // Função para autenticar o usuário
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email] && users[email] === password) {
      alert("Login bem-sucedido!");
      router.push("/dashboard"); // Redireciona para a página do dashboard
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="funcionalidades-container">
      <h1 className="page-title">Funcionalidades do PowerPath</h1>
      <div className="funcionalidades-grid">
        {funcionalidades.map((func, index) => (
          <CardFuncionalidade
            key={index}
            titulo={func.titulo}
            descricao={func.descricao}
            icone={func.icone as "charging_station" | "eco" | "route" | "medal" | "community"}
          />
        ))}
      </div>

      {/* Botão de Entrar */}
      <button
        onClick={() => setLoginOpen(true)}
        className="block mx-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      >
        {isRegistering ? "Registrar Conta" : "Entrar na Conta"}
      </button>

      {/* Modal de Login/Registro */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {isRegistering ? "Registrar Conta" : "Faça Login"}
            </h2>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
            />
            {isRegistering ? (
              <button
                onClick={handleRegister}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Registrar
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Entrar
              </button>
            )}
            <button
              onClick={() => setLoginOpen(false)}
              className="w-full mt-4 bg-gray-300 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Fechar
            </button>
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="w-full mt-2 text-blue-500 hover:underline text-center"
            >
              {isRegistering
                ? "Já tem uma conta? Faça Login"
                : "Não tem conta? Registre-se"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuncionalidadesPage;
