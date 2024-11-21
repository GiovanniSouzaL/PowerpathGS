"use client";

import { useState } from "react";
import { User } from "@/types/types";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const addUser = (newUser: User) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const findUser = (email: string, password: string): User | undefined => {
    return users.find((user) => user.email === email && user.password === password);
  };

  return { users, addUser, findUser };
};
