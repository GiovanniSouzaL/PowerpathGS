import React from "react";
import { FaGithub, FaLinkedin, FaUsers } from "react-icons/fa";
import Link from "next/link";

const Rodape: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} PowerPath. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/usuario/projeto" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" /> GitHub do Projeto
          </a>
          <a href="https://linkedin.com/company/empresa" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <Link href="/integrantes" className="social-icon">
            <FaUsers className="social-icon" /> Equipe
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
