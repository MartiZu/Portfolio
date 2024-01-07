import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ChefCard({ chef }) {
  return (
    <div className="chef-card">
      <div className="chef-image">
        <img src={chef.img} alt="martina" />
      </div>
      <div className="chef-card-info">
        <h3 className="chef-card-name">{chef.name}</h3>
        <p className="chef-recipes">
          Recipes: <b>{chef.recipes}</b>
        </p>
        <p className="chef-icons"><FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faTwitter}/></p>
      </div>
    </div>
  );
}
