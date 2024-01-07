import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function Quotes() {
  return (
    <div className="section quote">
      <p className="quote-text ">
        <span className="left">"</span>
        Thank you so much for all the encouragment and the help you have given me. Your energy and enthusiasm are contagious and I am so grateful that we worked together. I am so excited to see what you do next and I know you will be amazing at it.
        <span className="right">"</span>
      </p>
      <p className="quote-author">- Adam Saint</p>
    </div>
  );
}
