"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUsers = localStorage.getItem("users");
    const users = Array.isArray(JSON.parse(storedUsers || "[]"))
      ? JSON.parse(storedUsers || "[]")
      : [];

    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (!user) {
      alert("E-mail ou senha inválidos.");
      return;
    }

    localStorage.setItem("auth_token", "valid_token");
    alert("Login bem-sucedido!");
    router.push("/dashboard");
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
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
        <button onClick={handleLogin} className="btn-primary">
          Entrar
        </button>
        <p
          onClick={navigateToRegister}
          className="text-center text-blue-500 mt-4 cursor-pointer hover:underline"
        >
          Não tem uma conta? Registre-se
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
