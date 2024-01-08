

export default function RecipeCard({ project }) {
  return (
    <div className="recipe-card">
/
      <div className="recipe-card-info">
        <img className="img-author" src={project.author} alt="avatar" />
        <p className="recipe-title">{project.title}</p>
        <p className="description">{project.description}</p>
        <a className="link" href="#!">
          Get on the app
        </a>
      </div>
    </div>
  );
}
