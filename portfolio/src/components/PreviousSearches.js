import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches() {
  const search = [
    "pizza",
    "pasta",
    "soup",
    "salad",
    "dessert",
    "breakfast",
    "cheese",
  ];
  return (
    <div>
      <div className="cathegory-search">
        <h2>Search by cathegory</h2>
        <div className="search-buttons-container">
          {search.map((item) => (
            <div className="search-item" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search by cathegory" />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}
