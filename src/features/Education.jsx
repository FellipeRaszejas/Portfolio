import education from "../data/Education";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";
import "./Education.css";

function Education() {
  return (
    <section id="formacao" className="education-section">
      <SectionTitle>Formação</SectionTitle>

      <div className="carrosel">
        {education.map((item) => (
          <article key={item.id} className="card">
            {item.img && (
              <img src={item.img} alt={item.title} className="card-img" />
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
    </section>
  );
}

export default Education;
