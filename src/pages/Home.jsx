import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <>
      <section style={styles.hero}>
        <div>
          <h1 style={styles.title}>Joona</h1>
          <h2 style={styles.subtitle}>Full-stack Developer</h2>
          <p style={styles.text}>
            Front-end focused developer building practical web applications.
          </p>
        </div>
      </section>

      <TechStack />
    </>
  );
}

const styles = {
  hero: {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "1rem",
  },
  text: {
    maxWidth: "500px",
    lineHeight: 1.6,
  },
};
