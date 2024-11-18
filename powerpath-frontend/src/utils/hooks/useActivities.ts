import { useState, useEffect } from "react";
import { Activity } from "@/types/types";
import { getActivities, addActivity, removeActivity } from "@/app/api/atividade/route";

export const useActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  // Carregar atividades ao montar
  useEffect(() => {
    setActivities(getActivities());
  }, []);

  // Adicionar uma nova atividade
  const handleAddActivity = (description: string, time: string) => {
    const newActivity: Activity = {
      id: Date.now().toString(),
      description,
      time,
    };
    addActivity(newActivity);
    setActivities((prev) => [newActivity, ...prev]);
  };

  // Remover uma atividade
  const handleRemoveActivity = (id: string) => {
    removeActivity(id);
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  return { activities, handleAddActivity, handleRemoveActivity };
};
