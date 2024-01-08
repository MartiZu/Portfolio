export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.img} alt="martina" />
      </div>
      <div className="project-card-info">
        <h3 className="project-card-name">{project.name}</h3>
        <p className="project-recipes">
          Recipes: <b>{project.recipes}</b>
        </p>
        <p className="project-icons">
          <img src="/img/icons/linkedin.png" alt="instagram" />
          <img src="/img/icons/twitter.png" alt="instagram" />
        </p>
      </div>
    </div>
  );
}
