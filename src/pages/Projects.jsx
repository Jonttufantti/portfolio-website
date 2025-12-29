import ProjectCard from "../components/ProjectCard";
import task1 from "../assets/projects/taskpoint-1.png";
import task2 from "../assets/projects/taskpoint-2.png";

export default function Projects() {
  return (
    <section>
      <h1 style={{ marginBottom: "2rem" }}>Projects</h1>

      <div style={styles.grid}>
        <ProjectCard
          title="TaskPoint"
          description="Trello-like project management tool developed for internal use at the City of Turku."
          tech={["React", "Node.js", "PostgreSQL"]}
          link="https://github.com/yourusername/taskpoint"
          images={[task1, task2]}
        />

        <ProjectCard
          title="EntreFox App"
          description="Maintained and extended a legacy application, including multilingual support."
          tech={["React", "JavaScript"]}
          link="https://github.com/yourusername/entreforx"
        />

        <ProjectCard
          title="VarausApp"
          description="Student project for booking and reservation management. Focused on front-end implementation."
          tech={["JavaScript", "HTML", "CSS"]}
          link="https://github.com/yourusername/varausapp"
        />
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
};
