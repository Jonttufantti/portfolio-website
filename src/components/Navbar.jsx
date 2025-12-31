import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Joona Sandbacka</div>
      <div style={styles.links}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    borderBottom: "1px solid #334155",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#020617",
    zIndex: 1000,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    textDecoration: "none",
    color: "inherit",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
};
