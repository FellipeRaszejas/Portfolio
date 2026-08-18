import SectionTitle from "../components/ui/SectionTitle/SectionTitle";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="profile-sidebar">
        <div className="avatar-wrapper">
          <img
            src="/me.png"
            alt="Foto de Fellipe Raszejas"
            className="hero-avatar"
          />
        </div>
        <div className="profile-titles">
          <SectionTitle>Fellipe Raszejas</SectionTitle>
          <h3 className="profile-subtitle">Desenvolvedor</h3>
        </div>
      </div>

      <div className="readme-card">
        <div className="readme-body">
          <h1 className="readme-title">Entusiasta da Tecnologia</h1>
          <p>
            Sou Técnico em Desenvolvimento de Sistemas formado pelo SENAI,
            instituição onde tive a oportunidade de testar e aprimorar minhas
            habilidades na competição São Paulo Skills. Atualmente, estou
            expandindo minha formação acadêmica na Faculdade SENAI, cursando
            Análise e Desenvolvimento de Sistemas (ADS). Tenho conhecimentos em
            Front-End, Back-End, Banco de Dados e Metodologias Ágeis. Destaco-me
            pela organização, rápida adaptação a novas tecnologias e facilidade
            no aprendizado de rotinas técnicas. Em busca da minha primeira
            oportunidade no mercado de trabalho na área de TI ou Suporte
            Técnico, estou motivado para resolver desafios reais, contribuir com
            resultados para a equipe e crescer profissionalmente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;