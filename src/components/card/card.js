import "./card.css";
import "./flip-transition.css";

function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <img src="./images/earth2.png" alt="Earth day" className="card-imgb" />
      </div>
      <div className="card-front">
        <img src="./images/earth.png" alt="Earth day" className="card-imgf" />
      </div>
    </div>
  );
}

export default Card;
