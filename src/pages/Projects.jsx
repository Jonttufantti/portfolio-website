import ProjectCard from "../components/ProjectCard";
import point1 from "../assets/projects/projectpoint/projectpoint-1.png";
import point2 from "../assets/projects/projectpoint/projectpoint-2.png";
import point3 from "../assets/projects/projectpoint/projectpoint-3.png";
import point4 from "../assets/projects/projectpoint/projectpoint-4.png";
import point5 from "../assets/projects/projectpoint/projectpoint-5.png";
import varaus1 from "../assets/projects/varausapp/varausapp-1.png";
import varaus2 from "../assets/projects/varausapp/varausapp-2.png";
import varaus3 from "../assets/projects/varausapp/varausapp-3.png";
import varaus4 from "../assets/projects/varausapp/varausapp-4.png";
import varaus5 from "../assets/projects/varausapp/varausapp-5.png";
import entre1 from "../assets/projects/entrefox/entrefox-1.png";
import entre2 from "../assets/projects/entrefox/entrefox-2.png";
import entre3 from "../assets/projects/entrefox/entrefox-3.png";
import entre4 from "../assets/projects/entrefox/entrefox-4.png";
import entre5 from "../assets/projects/entrefox/entrefox-5.png";
import entre6 from "../assets/projects/entrefox/entrefox-6.png";
import land1 from "../assets/projects/landlordpro/landlordpro-1.png";
import land2 from "../assets/projects/landlordpro/landlordpro-2.png";
import land3 from "../assets/projects/landlordpro/landlordpro-3.png";
import land4 from "../assets/projects/landlordpro/landlordpro-4.png";
import land5 from "../assets/projects/landlordpro/landlordpro-5.png";
import next1 from "../assets/projects/nextcloud/nextcloud-1.png";
import next2 from "../assets/projects/nextcloud/nextcloud-2.png";
import next3 from "../assets/projects/nextcloud/nextcloud-3.png";
import next4 from "../assets/projects/nextcloud/nextcloud-4.png";

export default function Projects() {
  return (
    <section>
      <h1 style={{ marginBottom: "2rem" }}>Projects</h1>

      <div style={styles.grid}>
        <ProjectCard
          title="TaskPoint"
          description="Trello-like project management tool developed for internal use at the City of Turku."
          overview="A web app to manage projects and tasks internally. Provides Kanban-style boards and task tracking."
          highlights={[
            "Customizable boards and task lists",
            "Drag-and-drop interface",
            "Real-time updates for multiple users",
          ]}
          role={[
            "Developed frontend using React and Typescript",
            "Integrated backend API with Python",
            "Implemented PostgreSQL database connections",
          ]}
          tech={["React", "TypeScript", "Python", "PostgreSQL"]}
          link="https://github.com/jonttufantti/projectpoint"
          images={[point1, point2, point3, point4, point5]}
          isMobile={false}
        />

        <ProjectCard
          title="VarausApp"
          description="Student project for booking and reservation management. Focused on front-end implementation."
          overview="Web app for reserving computers and meeting spaces. Developed as a student project for smooth booking flow."
          highlights={[
            "Interactive booking interface",
            "Real-time availability updates",
            "Responsive design for desktop and mobile",
          ]}
          role={[
            "Frontend development with React and Chakra UI",
            "Integrated React Router for navigation",
            "Set up Docker for local development",
          ]}
          tech={["JavaScript", "HTML", "CSS"]}
          link="https://github.com/Jonttufantti/varausapp"
          images={[varaus1, varaus2, varaus3, varaus4, varaus5]}
          isMobile={false}
        />

        <ProjectCard
          title="EntreFox App"
          description="Cross-platform mobile application supporting entrepreneurship, with multilingual forms."
          overview="Restored legacy React Native app and added Finnish & English language support for accessibility."
          highlights={[
            "Dockerized for easy setup",
            "Runs on Android emulator or real device with Expo",
            "Mobile-friendly UI with smooth performance",
          ]}
          role={[
            "Restored existing functionality",
            "Added multi-language support",
            "Ensured smooth performance on Android and iOS",
          ]}
          tech={["React Native", "Expo"]}
          link="https://github.com/Jonttufantti/entrefox_app"
          images={[entre1, entre2, entre3, entre4, entre5, entre6]}
          isMobile={true}
        />

        <ProjectCard
          title="LandLord Pro App"
          description="Android application for Vietnamese landlords to manage properties and tenants."
          overview="Functional thesis project to create a modern, user-friendly property management app. Focus was on functionality."
          highlights={[
            "View and manage properties and tenants",
            "Track rent payments and due dates",
            "Simple, intuitive interface",
          ]}
          role={[
            "Developed entire Android app using Kotlin",
            "Designed UI and navigation flow",
            "Implemented SQLite database and core functionalities",
          ]}
          tech={["Kotlin", "Android Studio", "SQLite"]}
          link="https://github.com/Jonttufantti/LandLordPro"
          images={[land1, land2, land3, land4, land5]}
          isMobile={true}
        />

        <ProjectCard
          title="Nextcloud"
          description="Self-hosted Nextcloud server running on a Raspberry Pi 5 with Docker and external SSD."
          overview="Private cloud service for file storage, synchronization, and access across devices."
          highlights={[
            "Persistent storage on external SSD for data safety",
            "Secure remote access via Tailscale VPN",
            "Long-running, reliable Dockerized services on ARM hardware",
            "Web UI for file management and sharing",
          ]}
          role={[
            "Set up Raspberry Pi with Docker and Docker Compose",
            "Configured Nextcloud, MariaDB, Adminer, and Portainer containers",
            "Mounted and managed external SSD for persistent storage",
            "Implemented secure remote access using Tailscale",
          ]}
          tech={["Docker", "Linux", "Nextcloud", "MariaDB", "Tailscale"]}
          link="https://github.com/Jonttufantti/nextcloud-raspberrypi"
          images={[next1, next2, next3, next4]}
          isMobile={false}
        />
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gap: "1.5rem",
    margin: "0 auto",
  },
};
