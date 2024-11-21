"use client";

import { useRouter } from "next/navigation";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import { useDashboard } from "@/utils/hooks/useDashboard";

function Dashboard() {
  const router = useRouter();
  const {
    activities,
    newDescription,
    newTime,
    isAuthenticated,
    setNewDescription,
    setNewTime,
    addActivity,
    handleRemoveActivity,
  } = useDashboard();

  if (!isAuthenticated) {
    return (
      <main className="auth-container">
        <p className="auth-text">Verificando autenticação...</p>
        <button onClick={() => router.push("/")} className="auth-link">
          Voltar para a página inicial
        </button>
      </main>
    );
  }

  return (
    <main className="dashboard-container">
      <section className="header-actions">
        <button onClick={() => router.push("/logout")} className="btn-danger">
          Logout
        </button>
        <button onClick={() => router.push("/map")} className="btn-primary">
          Ir para o Mapa
        </button>
      </section>
      <section className="cards-grid">
        <DashboardCard
          title="Viagens Sustentáveis"
          value="25"
          subtitle="Este mês"
          color="text-blue-500"
          customClass="dashboard-card"
        />
        <DashboardCard
          title="Pontos de Recarga Visitados"
          value="12"
          subtitle="Total"
          color="text-green-500"
          customClass="dashboard-card"
        />
        <DashboardCard
          title="Economia de CO₂"
          value="45 kg"
          subtitle="Este mês"
          color="text-purple-500"
          customClass="dashboard-card"
        />
        <DashboardCard
          title="Recompensas Ganhas"
          value="5"
          subtitle="Novas este mês"
          color="text-yellow-500"
          customClass="dashboard-card"
        />
      </section>
      <section className="card">
        <h2 className="card-title">Atividades Destacadas</h2>
        <ul className="activity-list">
          {activities.map((activity) => (
            <li key={activity.id} className="activity-item">
              <div>
                <p className="text-description">{activity.description}</p>
                <p className="activity-time">{activity.time}</p>
              </div>
              <button
                onClick={() => handleRemoveActivity(activity.id)}
                className="text-remove"
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
            className="input"
          />
          <input
            type="text"
            placeholder="Quando ocorreu (ex: 2 horas atrás)"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="input"
          />
          <button onClick={addActivity} className="btn-primary">
            Adicionar
          </button>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
