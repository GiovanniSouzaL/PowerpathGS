import React from "react";
import Link from "next/link";
import { FaHome, FaList, FaUsers } from "react-icons/fa";

const Cabecalho: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">PowerPath</Link>
        </div>
        <nav className="nav">
          <Link href="/" className="nav-link">
            <FaHome /> Início
          </Link>
          <Link href="/funcionalidades" className="nav-link">
            <FaList /> Funcionalidades
          </Link>
          <Link href="/integrantes" className="nav-link">
            <FaUsers /> Equipe
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
