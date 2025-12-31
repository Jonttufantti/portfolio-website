import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.logo}>
        Joona Sandbacka
      </NavLink>
      <div style={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
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
