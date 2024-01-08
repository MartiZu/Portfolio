export default function TechStack() {
  const list = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Express",
    "PostgreSQL",
    "Jest",
    "Cypress",
    "Deployment",
    "Testing",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img className="image" src="/img/icons/rocket.png" alt="rocket" />
      </div>
      <div className="col text">
        <h1 className="title">This is what I've learnt so far</h1>
        <div className="skills-list">
          {list.map((item, index) => (
            <p className="skill-item" key={index}>
              {item}
            </p>
          ))}
        </div>
        <button className="btn">Projects</button>
        {/* <p className="info">
          This is where I share my experiences about coding and tech. You can
          see my projects, but also find out more about me and what drove me to
          become a developer.
        </p>
        <button className="btn">Go to projects</button> */}
      </div>
      <div className="col text"></div>
    </div>
  );
}
