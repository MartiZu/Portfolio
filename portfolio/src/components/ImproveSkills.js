import { Link } from "react-router-dom";

export const skillsList = [
  "JavaScript",
  "React",
  "Next.js",
  "CSS/SCSS",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Scala",
  "PostgreSQL",
  "DynamoDB/S3",
  "Jest/Vitest",
  "Cypress",
  "Playwright",
  "Mokito",
  "Datadog",
  "Jenkins",
  "Braze",
  "Databricks",
];

export default function TechStack() {
  return (
    <div className="section improve-skills">
      <div className="col img">
        {/* <img className="image" src="/img/icons/rocket.png" alt="rocket" /> */}
        {/* <img className="image-intro rotate" src="/img/icons/fly.png" alt="graph" /> */}
        <img className="image-skill" src="/img/icons/4qwu.gif" alt="roket" />
      </div>
      <div className="col text">
        <h1 className="title">My Tech Stack</h1>
        <div className="skills-list">
          {list.map((item, index) => (
            <p className="skill-item" key={index}>
              {item}
            </p>
          ))}
        </div>
        <Link to="/projects">
          <button className="btn">Projects</button>
        </Link>
        {/* <p className="info">
          This is where I share my experiences about coding and tech. You can
          see my projects, but also find out more about me and what drove me to
          become a developer.
        </p>
        <button className="btn">Go to projects</button> */}
      </div>
    </div>
  );
}
