import profilePic from "../assets/home/profile.png";
import TechStack from "../components/TechStack";
import HeroTextCarousel from "../components/HeroTextCarousel";
import Projects from "../pages/Projects";
import About from "../pages/About";

export default function Home() {
  return (
    <div style={{ paddingBottom: "80px" }}>
      <section id="home" style={styles.hero}>
        <div style={styles.inner}>
          <div style={styles.textContainer}>
            <h1 style={styles.title}>Joona Sandbacka</h1>
            <h2 style={styles.subtitle}>Full-stack Developer</h2>
            <HeroTextCarousel />
          </div>

          <div style={styles.imageContainer}>
            <img src={profilePic} alt="Profile" style={styles.image} />
          </div>
        </div>
      </section>

      <TechStack />

      <section id="about" style={{ scrollMarginTop: "40px" }}>
        <About />
      </section>

      <section id="projects" style={{ scrollMarginTop: "40px" }}>
        <Projects />
      </section>
    </div>
  );
}

const styles = {
  hero: {
    paddingTop: "6rem",
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
    flexWrap: "wrap",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    width: "100%",
    flexWrap: "wrap",
    gap: "2rem",
  },

  textContainer: {
    flex: 1,
    minWidth: "280px",
    textAlign: "left",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "4rem",
  },
  text: {
    maxWidth: "500px",
    lineHeight: 1.6,
  },
  imageContainer: {
    flex: 1,
    minWidth: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
  },
};
