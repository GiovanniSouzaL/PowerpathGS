import { Activity } from "@/types/types";

// Obter atividades do localStorage
export const getActivities = (): Activity[] => {
  const storedActivities = localStorage.getItem("activities");
  return storedActivities ? JSON.parse(storedActivities) : [];
};

// Adicionar uma nova atividade
export const addActivity = (newActivity: Activity): void => {
  const activities = getActivities();
  activities.unshift(newActivity);
  localStorage.setItem("activities", JSON.stringify(activities));
};

// Remover uma atividade pelo ID
export const removeActivity = (id: string): void => {
  const activities = getActivities().filter((activity) => activity.id !== id);
  localStorage.setItem("activities", JSON.stringify(activities));
};
