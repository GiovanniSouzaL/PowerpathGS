"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Garante que `users` é sempre um array
    const storedUsers = localStorage.getItem("users");
    const users = Array.isArray(JSON.parse(storedUsers || "[]"))
      ? JSON.parse(storedUsers || "[]")
      : [];

    const userExists = users.find((user: { email: string }) => user.email === email);

    if (userExists) {
      alert("Este e-mail já está registrado.");
      return;
    }

    // Adiciona o novo usuário e salva no localStorage
    const newUser = { email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Usuário registrado com sucesso!");
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Registrar</h1>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button onClick={handleRegister} className="btn-primary">
          Registrar
        </button>
      </div>
    </main>
  );
}

export default RegisterPage;
