import { useParams } from "react-router-dom";
import { cards } from "./data";

export default function View() {
  
  const myParams = useParams();
  const id = Number(myParams.id);
  const card = cards.find((card) => card.id === id);
  
  if (!card) {
    return <div>Card not found</div>;
  }
  
  return (
    <div className="card">
      <img src={card.Cover} alt={card.Title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{card.Title}</h3>
        <p className="card-description">{card.Description}</p>
        <p className="card-author">
          <strong>Author:</strong> {card.Author}
        </p>
        <p className="card-publishing">
          <strong>Publishing:</strong> {card.Publishing}
        </p>
        <p className="card-price">
          <strong>Price:</strong> {card.Price} THB
        </p>
        {card.Bestseller && (
          <span className="card-badge bestseller">{card.Bestseller}</span>
        )}
        {card.Flashsale && (
          <span className="card-badge flashsale">
            Flashsale: {card.Flashsale} THB
          </span>
        )}
      </div>
    </div>
  );
}
