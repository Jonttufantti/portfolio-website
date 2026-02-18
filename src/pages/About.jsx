export default function About() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <h1>About Me</h1>

        <p style={styles.intro}>
          I am an ICT Engineer and full-stack developer with nearly 10 years of
          prior experience in accounting, where I developed resilience,
          attention to detail, and teamwork skills.
          <br />
          <br />
          Today, I build practical web applications using React, Node.js, and
          Docker, with a growing focus on cloud and DevOps. My work combines
          problem-solving, creativity, and hands-on technical skills, and I
          enjoy tackling new challenges through projects that make a real
          impact.
        </p>

        <Section title="Work Experience">
          <Item
            title="Full-stack Developer – City of Turku"
            period="Oct 2024 – Apr 2025"
            description="Working on ProjectPoint, an internal project management tool similar to Trello.
          Responsible primarily for front-end development with React, JavaScript, and TypeScript,
          while also contributing to back-end features with Django and Python."
          />

          <Item
            title="Software Developer – TUAS - theFirma"
            period="May 2023 – Aug 2023"
            description="Developed multiple projects across web and mobile platforms. Also served as project manager."
            bullets={[
              "Electrical Training App: Managed Apple App Store publishing, client communication, and content updates.",
              "Booking App: React Native development, Chakra UI updates, and Git repository optimization by consolidating data stores.",
              "Entrefox: Revived a non-functional legacy project by updating dependencies, implementing internationalization, and optimizing for tablet layouts.",
              "Project Gate: Improved search features, accessibility, and bug fixes in an ERP system.",
            ]}
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
            title="Helsinki University"
            period="2025-"
            description="Full Stack Open – Modern web development course focusing on React, TypeScript, Node.js, and CI/CD."
          />
          <Item
            title="Bachelor of Engineering, Information and Communications Technology"
            period="2020-2024"
            description="Turku University of Applied Sciences"
          />
          <Item
            title="Vocational Qualification in Business and Administration"
            period="2010-2012"
            description="Turun Vocational School"
          />
        </Section>

        <Section title="Languages">
          <p>
            <br />
            Finnish: Native
            <br />
            <br />
            English: Excellent
            <br />
          </p>
        </Section>
      </div>
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

function Item({ title, period, description, bullets }) {
  return (
    <div style={styles.item}>
      <strong>{title}</strong>
      <div style={styles.period}>{period}</div>
      {description && <p>{description}</p>}
      {bullets && (
        <ul style={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundImage: "url('/about-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "5rem 1.5rem",
  },
  container: {
    marginTop: "3rem",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    color: "#cbd5f5",

    background: "rgba(2, 6, 23, 0.85)",
    backdropFilter: "blur(6px)",
    borderRadius: "14px",
    border: "1px solid #334155",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
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
  bullets: {
    marginTop: "0.5rem",
    paddingLeft: "1.2rem",
    lineHeight: 1.6,
  },
};
