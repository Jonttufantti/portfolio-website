import ProjectCard from "../components/ProjectCard";
import point1 from "../assets/projects/projectpoint/projectpoint-1.png";
import point2 from "../assets/projects/projectpoint/projectpoint-2.png";
import point3 from "../assets/projects/projectpoint/projectpoint-3.png";
import point4 from "../assets/projects/projectpoint/projectpoint-4.png";
import point5 from "../assets/projects/projectpoint/projectpoint-5.png";
import varaus1 from "../assets/projects/varausapp/varausapp-1.png";
import varaus2 from "../assets/projects/varausapp/varausapp-2.png";
import varaus3 from "../assets/projects/varausapp/varausapp-3.png";
import varaus4 from "../assets/projects/varausapp/varausapp-4.png";
import varaus5 from "../assets/projects/varausapp/varausapp-5.png";
import entre1 from "../assets/projects/entrefox/entrefox-1.png";
import entre2 from "../assets/projects/entrefox/entrefox-2.png";
import entre3 from "../assets/projects/entrefox/entrefox-3.png";
import entre4 from "../assets/projects/entrefox/entrefox-4.png";
import entre5 from "../assets/projects/entrefox/entrefox-5.png";
import entre6 from "../assets/projects/entrefox/entrefox-6.png";
import land1 from "../assets/projects/landlordpro/landlordpro-1.png";
import land2 from "../assets/projects/landlordpro/landlordpro-2.png";
import land3 from "../assets/projects/landlordpro/landlordpro-3.png";
import land4 from "../assets/projects/landlordpro/landlordpro-4.png";
import land5 from "../assets/projects/landlordpro/landlordpro-5.png";

export default function Projects() {
  return (
    <section>
      <h1 style={{ marginBottom: "2rem" }}>Projects</h1>

      <div style={styles.grid}>
        <ProjectCard
          title="TaskPoint"
          description="Trello-like project management tool developed for internal use at the City of Turku."
          tech={["React", "Node.js", "PostgreSQL"]}
          link="https://github.com/jonttufantti/projectpoint"
          images={[point1, point2, point3, point4, point5]}
          isMobile={false}
        />

        <ProjectCard
          title="VarausApp"
          description="Student project for booking and reservation management. Focused on front-end implementation."
          tech={["JavaScript", "HTML", "CSS"]}
          link="https://github.com/Jonttufantti/varausapp"
          images={[varaus1, varaus2, varaus3, varaus4, varaus5]}
          isMobile={false}
        />

        <ProjectCard
          title="EntreFox App"
          description="Maintained and extended a legacy application, including multilingual support."
          tech={["React", "JavaScript"]}
          link="https://github.com/Jonttufantti/entrefox_app"
          images={[entre1, entre2, entre3, entre4, entre5, entre6]}
          isMobile={true}
        />

        <ProjectCard
          title="LandLord Pro App"
          description="Maintained and extended a legacy application, including multilingual support."
          tech={["React", "JavaScript"]}
          link="https://github.com/Jonttufantti/LandLordPro"
          images={[land1, land2, land3, land4, land5]}
          isMobile={true}
        />
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gap: "1.5rem",
    margin: "0 auto",
  },
};
