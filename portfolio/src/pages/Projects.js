import PreviousSearches from "../components/PreviousSearches";
import ProjectsCard from "../components/ProjectsCard";
const projects = [
  {
    title: "Study Buddy",
    image: "/img/gallery/pizza-margherita.jpg",
    author: "Team project",
    description: "The softes pizza dough you'll ever try.",
  },
  {
    title: "LendLogic",
    image: "/img/gallery/carbonara.jpg",
    author: "Team project",
    description:
      "Carbonara with real guanciale, pecorino and lots of black pepper.",
  },
  {
    title: "LendLogic Extension",
    image: "/img/gallery/polpette.jpg",
    author: "Team project & myself",
    description: "Chicken and beef meatballs, soft and deliciously tasty.",
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
