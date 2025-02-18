import { skillsList } from "./ImproveSkills";

export default function SkillsSearches() {
  const skills = skillsList;
  return (
    <div>
      <div className="cathegory-search">
        {/* <h2>Search by skills</h2> */}
        <div className="search-buttons-container">
          {skills.map((item) => (
            <div className="search-item" key={item}>
              {item}
            </div>
          ))}
        </div>
        {/* <div className="search-box">
          <input type="text" placeholder="Search by cathegory" />
          <button className="btn">Go!</button>
        </div> */}
      </div>
    </div>
  );
}
