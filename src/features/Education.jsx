import React, { useState, useRef } from "react";
import education from "../data/Education";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";
import "./Education.css";

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Variáveis para controlar o clique e arraste
  const isDragging = useRef(false);
  const startX = useRef(0);

  // Início do Arrasto (Mouse Down / Touch Start)
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
  };

  // Fim do Arrasto (Mouse Up / Touch End)
  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const endX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
    const diff = startX.current - endX;

    // Sensibilidade de 50px de movimento para trocar de card
    if (diff > 50 && activeIndex < education.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (diff < -50 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Cálculo de translação para alinhar o card ativo no centro
  const getTranslateValue = () => {
    if (!containerRef.current) return 0;
    const width = containerRef.current.offsetWidth;
    const initialTranslate = width * 0.25; // Alinha o primeiro item ao centro
    const step = width * 0.5; // Espaçamento entre itens (min-width de 50%)
    return initialTranslate - activeIndex * step;
  };

  return (
    <section id="formacao" className="education-section">
      <SectionTitle className="form">Formações</SectionTitle>

      <div 
        className="carousel-container" 
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(${getTranslateValue()}px)` }}
        >
          {education.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <article 
                key={item.id} 
                className={`carousel-card ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                <div className="carousel-card-content">
                  {item.img && (
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="card-img" 
                      draggable="false" 
                    />
                  )}
                  
                  {/* Overlay de Informações */}
                  <div className="card-info">
                    <h3>{item.title}</h3>
                    <p>{item.institution}</p>

                    <div className="card-more">
                      <span className="badge-type">{item.type}</span>
                      <span className="badge-year">{item.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Indicadores sutis (Dots) */}
        <div className="dots">
          {education.map((_, i) => (
            <span
              key={i}
              className={`dot ${activeIndex === i ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;