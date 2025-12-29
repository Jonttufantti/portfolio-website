import ProjectCarousel from "./ProjectCarousel";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  images,
}) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>

      <p style={styles.desc}>{description}</p>

      {images && <ProjectCarousel images={images} />}

      <div style={styles.tech}>
        {tech.map((t) => (
          <span key={t} style={styles.badge}>
            {t}
          </span>
        ))}
      </div>

      <a href={link} target="_blank" style={styles.link}>
        View on GitHub →
      </a>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #334155",
    borderRadius: "8px",
    padding: "1.5rem",
    background: "#020617",
  },
  desc: {
    margin: "0.75rem 0",
    color: "#cbd5f5",
  },
  tech: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  badge: {
    fontSize: "0.8rem",
    padding: "0.25rem 0.5rem",
    border: "1px solid #334155",
    borderRadius: "4px",
  },
  link: {
    color: "#38bdf8",
  },
};
