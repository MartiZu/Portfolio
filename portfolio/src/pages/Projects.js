import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
const recipes = [
  {
    title: "Pizza Margherita",
    image: "/img/gallery/pizza-margherita.jpg",
    author: "/img/chefs/martina.jpg",
    description: "The softes pizza dough you'll ever try.",
  },
  {
    title: "Carbonara",
    image: "/img/gallery/carbonara.jpg",
    author: "/img/chefs/borghese.jpg",
    description:
      "Carbonara with real guanciale, pecorino and lots of black pepper.",
  },
  {
    title: "Polpette",
    image: "/img/gallery/polpette.jpg",
    author: "/img/chefs/barbieri.jpg",
    description: "Chicken and beef meatballs, soft and deliciously tasty.",
  },
].sort(() => Math.random() - 0.5); // randomize the order of the array);

export default function Projects() {
  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
