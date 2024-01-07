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
"Testing"
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
<p>Projects carousel to be added</p>
      </div>
      <div className="col text">
        <h1 className="title">This is what I've learnt so far</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">Contact me</button>
      </div>
    </div>
  );
}
