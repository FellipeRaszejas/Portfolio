import { useState } from "react";
import "./Navbar.css";
import Button from "../components/ui/Button/Button";
import "../styles/variables.css";

function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const fotoPadrao = "/avatar.png";
  const perfil = "./user.png";

  const handleAvatarClick = () => {
    if (!usuario) {
      const confirmou = window.confirm(
        "Você precisa se autentifcar. Deseja ir para a página de login?",
      );
      if (confirmou) {
        window.location.href = "/login"; // Faz o navegador mudar de página imediatamente
        setUsuario({ nome: "Fellipe", foto: perfil });
      }
    } else {
      alert(`Olá, ${usuario.nome}! Redirecionando para seu perfil...`);
    }
  };
  return (
    <>
      {sidebar && (
        <>
          <div className={`sidebar ${aberto ? "aberto" : ""}`}>
            <Button className="aba" onClick={() => setAberto(!aberto)}>
              Sidebar
            </Button>

            {aberto && (
              <aside className="bar">
                {/* 1. Logo da Sidebar */}
                <div className="logo">
                  <a href="#hero">
                    <img src="/logo.png" alt="Logo" className="logo-img" />
                  </a>
                </div>

                <ul className="menu-mobile">
                  <li>
                    <a href="#hero">Início</a>
                  </li>
                  <li>
                    <a href="#formacao">Formação</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projetos">Projetos</a>
                  </li>
                  <li>
                    <a href="#dashboard">Dashboard</a>
                  </li>
                  <li>
                    <a href="#playground">Playground</a>
                  </li>
                  <li>
                    <a href="#experiencia">Experiência</a>
                  </li>
                  <li>
                    <a href="#contato">Contato</a>
                  </li>
                </ul>

                <div className="options">
                  <button
                    type="button"
                    className="avatar-btn"
                    onClick={handleAvatarClick}
                    title={usuario ? "Ver perfil" : "Fazer Login"}
                  >
                    <img
                      src={usuario ? usuario.foto : fotoPadrao}
                      alt="Avatar do Usuário"
                      className="avatar-img"
                    />
                  </button>

                  <Button
                    onClick={() => {
                      setNavbar(true);
                      setSidebar(false);
                    }}
                  >
                    Converter em Navbar
                  </Button>
                </div>
              </aside>
            )}
          </div>
        </>
      )}

      {navbar && (
        <nav className="navbar">
          {/* 3. Logo da Navbar Desktop */}
          <div className="logo">
            <a href="#hero">
              <img src="/logo.png" alt="Logo" className="logo-img" />
            </a>
          </div>

          <ul className="menu-desktop">
            <li>
              <a href="#hero">Início</a>
            </li>
            <li>
              <a href="#formacao">Formação</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#playground">Playground</a>
            </li>
            <li>
              <a href="#experiencia">Experiência</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>

          <div className="options">
            <Button
              onClick={() => {
                setNavbar(false);
                setSidebar(true);
              }}
            >
              Converter Sidebae
            </Button>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
