export default function About() {
  return (
    <section style={styles.container}>
      <h1>About Me</h1>

      <p style={styles.intro}>
        I am an ICT Engineering graduate and full-stack developer with a strong
        focus on front-end development. Previously, I worked nearly 10 years in
        accounting, developing resilience, attention to detail, and teamwork
        skills. I now focus on building practical web applications and
        strengthening my back-end, cloud, and DevOps expertise.
      </p>

      <Section title="Work Experience">
        <Item
          title="Full-stack Developer (Trainee) – City of Turku"
          period="Oct 2024 – Apr 2025"
          description="Working on TaskPoint, an internal project management tool similar to Trello.
          Responsible primarily for front-end development with React, JavaScript, and TypeScript,
          while also contributing to back-end features with Django and Python."
        />

        <Item
          title="Software Developer – CSStheFirma"
          period="May 2023 – Aug 2023"
          description="Web development with React, MongoDB, JavaScript, and Expo.
          Also served as project manager for multiple projects."
        />

        <Item
          title="Accountant / Payroll Administrator – Tilitoimisto Immonen & Sinkkonen Oy"
          period="May 2012 – May 2022"
          description="Handled accounting, financial statements, tax returns, and payroll
          processing for client companies. Developed strong organizational and teamwork skills."
        />
      </Section>

      <Section title="Education">
        <Item
          title="Bachelor of Engineering, Information and Communications Technology"
          period="2024"
          description="Turku University of Applied Sciences"
        />
        <Item
          title="Full Stack Open – Helsinki University"
          period="2025"
          description="Modern web development course focusing on React, TypeScript, Node.js, and CI/CD."
        />
        <Item
          title="Vocational Qualification in Business and Administration"
          period="2012"
          description="Turun Vocational School"
        />
      </Section>

      <Section title="Languages">
        <p>
          Finnish: Native
          <br />
          English: Excellent
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
    margin: "0 auto",
    padding: "2rem",
    color: "#cbd5f5",
  },
  intro: {
    margin: "1rem 0 2rem",
    lineHeight: 1.6,
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
