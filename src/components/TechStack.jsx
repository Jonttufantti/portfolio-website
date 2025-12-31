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
  FaAndroid,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiExpress,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

export default function TechStack() {
  return (
    <section style={styles.section}>
      <h3 style={styles.heading}>Skills</h3>

      <div style={styles.grid}>
        <Category title="Front-end">
          {/* React with white background */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "0.15rem",
              display: "inline-flex",
            }}
            title="React"
          >
            <FaReact color="#61DAFB" />
          </div>

          {/* React Native */}
          <FaReact color="#61DAFB" title="React Native" />
          <FaJs color="#F7DF1E" title="JavaScript" />
          <span style={{ fontSize: "1rem" }} title="TypeScript">
            TS
          </span>
          <FaHtml5 color="#E34F26" title="HTML5" />
          <FaCss3Alt color="#1572B6" title="CSS3" />
          <span style={{ fontSize: "1rem" }} title="Material UI">
            MUI
          </span>
          <SiNextdotjs color="#000000" title="Next.js" />
        </Category>

        <Category title="Back-end">
          <FaNodeJs color="#339933" title="Node.js" />
          <FaPython color="#3776AB" title="Python" />
          <SiDjango color="#092E20" title="Django" />
          <SiExpress color="#000000" title="Express.js" />
        </Category>

        <Category title="Databases">
          <SiPostgresql color="#4169E1" title="PostgreSQL" />
          <SiMongodb color="#47A248" title="MongoDB" />
          <span style={{ fontSize: "1rem" }} title="SQL">
            SQL
          </span>
        </Category>

        <Category title="Cloud & DevOps">
          <FaDocker color="#2496ED" title="Docker" />
          <span style={{ fontSize: "1rem" }} title="CI/CD">
            CI/CD
          </span>
          <span style={{ fontSize: "1rem" }} title="Docker Compose">
            Docker Compose
          </span>
          <span style={{ fontSize: "1rem" }} title="Kubernetes">
            Kubernetes
          </span>
        </Category>

        <Category title="Tools">
          <FaGitAlt color="#F05032" title="Git" />
          <FaLinux color="#FCC624" title="Linux" />
          <SiPostman color="#FF6C37" title="Postman" />
          <span style={{ fontSize: "1rem" }} title="Visual Studio Code">
            VS Code
          </span>
          <FaAndroid color="#007ACC" title="Android Studio" />
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
    marginTop: "3rem",
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
