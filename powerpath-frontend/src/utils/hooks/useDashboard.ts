"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActivities } from "@/utils/hooks/useActivities";

export const useDashboard = () => {
  const router = useRouter();
  const { activities, handleAddActivity, handleRemoveActivity } = useActivities();

  const [newDescription, setNewDescription] = useState("");
  const [newTime, setNewTime] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica a autenticação
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const addActivity = () => {
    if (!newDescription || !newTime) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    handleAddActivity(newDescription, newTime);
    setNewDescription("");
    setNewTime("");
  };

  return { activities, newDescription, newTime, isAuthenticated, setNewDescription, setNewTime, addActivity, handleRemoveActivity};
};
