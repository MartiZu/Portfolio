import PreviousSearches from "../components/PreviousSearches";
import ProjectsCard from "../components/ProjectsCard";
const projects = [
  {
    title: "Study Buddy",
    image: "/img/icons/project.png",
    author: "Team project",
    stack: "Node.js, Express, PostgreSQL, HTML, CSS, JavaScript",
    description:
      "A user-friendly study platform with a successful frontend and backend integration.",
    demo: "https://study-buddy-app-zeta.vercel.app/login.html",
    github: "https://github.com/MartiZu/Study-Buddy-app",
    video: "https://www.youtube.com/watch?v=L-WxnATCCro",
  },
  {
    title: "LendLogic",
    image: "/img/icons/project.png",
    author: "Team project",
    stack: "Next.js, JSON Server, Tailwind, CSS, JavaScript, Jest, Cypress",
    description:
      "Worked with stakeholders who work for a large financial institution, building a user focused mortgage application.",
    demo: "https://land-logic-app-frontend.vercel.app/",
    github: "https://github.com/MartiZu/LendLogic-app",
    video: "https://youtu.be/OzsE8fKVlh8",
  },
  {
    title: "LendLogic Extension",
    image: "/img/icons/project.png",
    author: "Personal extension of team project",
    stack: "Next.js, JSON Server, Tailwind, CSS, JavaScript, Jest, Cypress",
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
    stack: "Next.js, JSON Server, Tailwind, CSS, JavaScript",
    description:
      "Help-Dev Ticketing System designed to facilitate the submission and resolution of help tickets.",
    demo: "https://help-dev-app.vercel.app/",
    github: "https://github.com/MartiZu/Help-dev-app",
    video: "",
  },
  {
    title: "The SleighLine",
    image: "/img/icons/project.png",
    author: "Hackathon project",
    stack: "Next.js, JSON Server, Tailwind, CSS, JavaScript",
    description:
      "Supporting Santa making his journey around the world, by allowing him to check the cheapest day to fly to each destination.",
    demo: "https://the-sleigh-line-9z3n4rjdt-martizus-projects.vercel.app/",
    github: "https://github.com/MartiZu/Santa-s_holiday",
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
      <div className="loading-container">
        <p>More projects soon..</p>
        <img className="loading" src="/img/icons/loading.gif" alt="loading" />
      </div>
    </div>
  );
}
