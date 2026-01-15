import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <a href="mailto:joona.sandbacka@hotmail.fi">
        <FaEnvelope />
      </a>
      <a href="https://github.com/Jonttufantti" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/joona-sandbacka-957973265/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "1.5rem",
    borderTop: "1px solid #334155",
    fontSize: "1.5rem",
    position: "sticky",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#020617",
    zIndex: 1000,
  },
};
