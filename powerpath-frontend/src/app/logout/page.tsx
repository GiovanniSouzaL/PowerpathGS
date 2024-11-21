"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("auth_token"); 
    router.push("/"); 
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="text-lg text-gray-600">Saindo...</p>
      </div>
    </main>
  );
}

export default LogoutPage;
