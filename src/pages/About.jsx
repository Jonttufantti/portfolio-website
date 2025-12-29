export default function About() {
  return (
    <section style={styles.container}>
      <h1>About Me</h1>

      <p style={styles.intro}>
        I am an ICT Engineering graduate and full-stack developer with a strong
        focus on front-end development. I enjoy building clear, practical user
        interfaces and understanding how the full application stack works.
      </p>

      <Section title="Work Experience">
        <Item
          title="Full-stack Developer (Trainee) – City of Turku"
          period="2025 – Present"
          description="
          Working on TaskPoint, an internal project management tool similar to Trello.
          Responsible primarily for front-end development, while also contributing
          to back-end features and maintenance.
          "
        />
      </Section>

      <Section title="Education">
        <Item
          title="Bachelor of Engineering, Information and Communications Technology"
          period="2024"
          description="Turku University of Applied Sciences"
        />
      </Section>

      <Section title="Skills">
        <p>
          Front-end: React, JavaScript, HTML, CSS
          <br />
          Back-end: Node.js, Python, Django
          <br />
          Databases: PostgreSQL, MongoDB
          <br />
          DevOps & Tools: Docker, Git, GitHub Actions, Linux
        </p>
      </Section>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div style={styles.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Item({ title, period, description }) {
  return (
    <div style={styles.item}>
      <strong>{title}</strong>
      <div style={styles.period}>{period}</div>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
  },
  intro: {
    margin: "1rem 0 2rem",
    lineHeight: 1.6,
    color: "#cbd5f5",
  },
  section: {
    marginBottom: "2.5rem",
  },
  item: {
    marginTop: "1rem",
  },
  period: {
    fontSize: "0.85rem",
    color: "#94a3b8",
    marginBottom: "0.5rem",
  },
};
