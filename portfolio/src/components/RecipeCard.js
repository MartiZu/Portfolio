

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
/
      <div className="recipe-card-info">
        <img className="img-author" src={recipe.author} alt="avatar" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="description">{recipe.description}</p>
        <a className="link" href="#!">
          View Recipe
        </a>
      </div>
    </div>
  );
}
