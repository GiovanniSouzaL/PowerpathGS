import { DashboardCardProps } from "@/types/types";

function DashboardCard({ title, value, subtitle, color, customClass }: DashboardCardProps) {
  return (
    <div className={`dashboard-card ${customClass}`}>
      <h2 className="dashboard-card-title">{title}</h2>
      <p className={`dashboard-card-value ${color}`}>{value}</p>
      <p className="dashboard-card-subtitle">{subtitle}</p>
    </div>
  );
}

export default DashboardCard;
