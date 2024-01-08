import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const projects = [
    { name: "Study Buddy", recipes: 14, img: "/img/projects/martina.jpg" },
    { name: "Matteo Colapasta", recipes: 11, img: "/img/projects/borghese.jpg" },
    { name: "Simone Tarallo", recipes: 10, img: "/img/projects/barbieri.jpg" },
    { name: "Giuseppe Colabrodo", recipes: 17, img: "/img/projects/massari.jpg" },
    { name: "Alberto Burro", recipes: 8, img: "/img/projects/gino.jpg" },
  ];
  return (
    <div className="section project">
      <h1 className="title">Get to know our projects</h1>
      <div className="project-container">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
