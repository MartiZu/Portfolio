export default function ProjectsCard({ project }) {
  return (
    <div className="projects-card">
      <div className="projects-card-info">
        <img className="img-author" src={project.image} alt="avatar" />
        <p className="projects-title">{project.title} - <span className="author">{project.author}</span></p>
        <p className="description">{project.description}</p>
        <p className="stack">{project.stack}</p>
        <a className="link" target="_blank" href={project.demo}>
          Get on the app
        </a>
        <a className="repo" target="_blank" href={project.github}>
          See the repo
        </a>
      </div>
    </div>
  );
}
