import ProjectCarousel from "./ProjectCarousel";

export default function ProjectCard({
  title,
  description,
  overview,
  highlights,
  role,
  tech,
  link,
  images,
  isMobile,
}) {
  return (
    <div style={styles.card}>
      <div style={styles.top}>
        <h3>{title}</h3>
        <p style={styles.desc}>{description}</p>
        {overview && (
          <p style={styles.overview}>
            <strong>Overview:</strong> {overview}
          </p>
        )}
        {highlights && (
          <div>
            <strong>Highlights:</strong>
            <ul style={styles.list}>
              {highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {role && (
          <div>
            <strong>My Role:</strong>
            <ul style={styles.list}>
              {role.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div style={styles.carouselContainer}>
        {images && <ProjectCarousel images={images} isMobile={isMobile} />}
      </div>

      <div>
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
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #334155",
    borderRadius: "8px",
    padding: "1.5rem",
    background: "#020617",
    height: "100%",
  },
  top: {
    marginBottom: "1rem",
  },
  carouselContainer: {
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "contain",
    marginBottom: "1rem",
  },
  desc: {
    margin: "0.5rem 0",
    color: "#cbd5f5",
  },
  overview: {
    margin: "0.5rem 0",
    color: "#cbd5f5",
  },
  list: {
    margin: "0.25rem 0 0.5rem 1.2rem",
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
