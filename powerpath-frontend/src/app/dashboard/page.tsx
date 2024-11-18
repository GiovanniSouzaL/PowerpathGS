"use client"; // Marca o componente como Client Component

import React, { useState } from "react";
import { useActivities } from "@/utils/hooks/useActivities";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { activities, handleAddActivity, handleRemoveActivity } = useActivities();
  const [newDescription, setNewDescription] = useState("");
  const [newTime, setNewTime] = useState("");

  const addActivity = () => {
    if (!newDescription || !newTime) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    handleAddActivity(newDescription, newTime);
    setNewDescription("");
    setNewTime("");
  };

  const handleLogout = () => {
    document.cookie = "auth_token=; path=/; max-age=0"; // Remove o cookie
    router.push("/login");
  };

  return (
    <main className="dashboard-container">
      <section className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Viagens Sustentáveis" value="25" subtitle="Este mês" color="text-blue-600" />
        <DashboardCard title="Pontos de Recarga Visitados" value="12" subtitle="Total" color="text-green-500" />
        <DashboardCard title="Economia de CO₂" value="45 kg" subtitle="Este mês" color="text-purple-600" />
        <DashboardCard title="Recompensas Ganhas" value="5" subtitle="Novas este mês" color="text-yellow-500" />
      </section>
      <section className="card">
        <h2 className="card-title">Atividades Destacadas</h2>
        <ul className="activity-list">
          {activities.map((activity) => (
            <li key={activity.id} className="activity-item flex justify-between items-center">
              <div>
                <p className="text-gray-600">{activity.description}</p>
                <p className="activity-time">{activity.time}</p>
              </div>
              <button
                onClick={() => handleRemoveActivity(activity.id)}
                className="text-red-500 hover:underline"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="card">
        <h2 className="card-title">Adicionar Nova Atividade</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Descrição da atividade"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Quando ocorreu (ex: 2 horas atrás)"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <button
            onClick={addActivity}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Adicionar
          </button>
        </div>
      </section>
    </main>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, subtitle, color }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className={`card-value ${color}`}>{value}</p>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  );
};

export default Dashboard;
