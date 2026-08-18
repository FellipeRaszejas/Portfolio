import React, { useRef, useState } from "react";
import education from "../data/Education";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";
import "./Education.css";

function Education() {
  const carouselRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Funções para permitir ARRASTAR com o MOUSE
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidade do arrasto
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="formacao" className="education-section">
      <SectionTitle>Formação</SectionTitle>

      <div className="carousel-wrapper">
        <div 
          className={`carrosel ${isDown ? "active" : ""}`} 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {education.map((item) => (
            <article key={item.id} className="card">
              {item.img && (
                <img src={item.img} alt={item.title} className="card-img" draggable="false" />
              )}
              
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.institution}</p>

                <div className="card-more">
                  <span className="badge-type">{item.type}</span>
                  <span className="badge-year">{item.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;