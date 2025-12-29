import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiDjango } from "react-icons/si";

export default function TechStack() {
  return (
    <section style={styles.section}>
      <h3 style={styles.heading}>Areas of Expertise</h3>

      <div style={styles.grid}>
        <Category title="Front-end">
          <FaReact color="#61DAFB" />
          <FaJs color="#F7DF1E" />
          <FaHtml5 color="#E34F26" />
          <FaCss3Alt color="#1572B6" />
        </Category>

        <Category title="Back-end">
          <FaNodeJs color="#339933" />
          <FaPython color="#3776AB" />
          <SiDjango color="#092E20" />
        </Category>

        <Category title="Databases">
          <SiPostgresql color="#4169E1" />
          <SiMongodb color="#47A248" />
        </Category>

        <Category title="Cloud & DevOps">
          <FaDocker color="#2496ED" />
          <span style={{ fontSize: "1rem" }}>CI/CD</span>
        </Category>

        <Category title="Tools">
          <FaGitAlt color="#F05032" />
          <FaLinux color="#FCC624" />
        </Category>
      </div>
    </section>
  );
}

function Category({ title, children }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <div style={styles.icons}>{children}</div>
    </div>
  );
}

const styles = {
  section: {
    marginTop: "4rem",
  },
  heading: {
    marginBottom: "2rem",
    fontSize: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    padding: "1.5rem",
    border: "1px solid #334155",
    borderRadius: "8px",
    background: "#020617",
  },
  icons: {
    marginTop: "1rem",
    display: "flex",
    gap: "0.75rem",
    fontSize: "1.8rem",
    flexWrap: "wrap",
  },
};
