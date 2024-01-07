import ChefCard from "./ChefCard";

export default function ChefSection() {
  const chefs = [
    { name: "Study Buddy", recipes: 14, img: "/img/chefs/martina.jpg" },
    { name: "Matteo Colapasta", recipes: 11, img: "/img/chefs/borghese.jpg" },
    { name: "Simone Tarallo", recipes: 10, img: "/img/chefs/barbieri.jpg" },
    { name: "Giuseppe Colabrodo", recipes: 17, img: "/img/chefs/massari.jpg" },
    { name: "Alberto Burro", recipes: 8, img: "/img/chefs/gino.jpg" },
  ];
  return (
    <div className="section chef">
      <h1 className="title">Get to know our chefs</h1>
      <div className="chef-container">
        {chefs.map((chef, index) => {
          return <ChefCard key={index} chef={chef} />;
        })}
      </div>
    </div>
  );
}
