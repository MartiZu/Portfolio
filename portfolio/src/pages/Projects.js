import PreviousSearches from "../components/PreviousSearches";
import ProjectsCard from "../components/ProjectsCard";
const projects = [
  {
    title: "Study Buddy",
    image: "/img/icons/project.png",
    author: "Team project",
    description:
      "A user-friendly study platform with a successful frontend and backend integration.",
    demo: "https://study-buddy-app-zeta.vercel.app/index.html",
    github: "https://github.com/MartiZu/Study-Buddy-app",
    video: "https://www.youtube.com/watch?v=L-WxnATCCro",
  },
  {
    title: "LendLogic",
    image: "/img/icons/project.png",
    author: "Team project",
    description:
      "Worked with stakeholders who work for a large financial institution, building a user focused mortgage application.",
    demo: "https://land-logic-app-frontend.vercel.app/",
    github: "https://github.com/MartiZu/LendLogic-app",
    video: "https://youtu.be/OzsE8fKVlh8",
  },
  {
    title: "LendLogic Extension",
    image: "/img/icons/project.png",
    author: "Team project & myself",
    description:
      "I took what we created, initiated a separate project and implement additional features.",
    demo: "https://lend-logic-app-extension.vercel.app/",
    github: "https://github.com/MartiZu/LendLogic-app-extension",
    video: "",
  },
  {
    title: "HelpDev",
    image: "/img/icons/project.png",
    author: "Team project",
    description:
      "Help-Dev Ticketing System designed to facilitate the submission and resolution of help tickets.",
    demo: "https://help-dev-app.vercel.app/",
    github: "https://github.com/MartiZu/Help-dev-app",
    video: "",
  },
].sort(() => Math.random() - 0.5); // randomize the order of the array);

export default function Projects() {
  return (
    <div>
      <PreviousSearches />
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
