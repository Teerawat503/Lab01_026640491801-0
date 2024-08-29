const Card = ({ card }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={card.Cover}
        alt={card.Title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{card.Title}</h3>
        <p className="text-gray-700 mb-2">{card.Description}</p>
        <p className="text-gray-600 mb-1">
          <strong>Author:</strong> {card.Author}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Code:</strong> {card.Code}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Publishing:</strong> {card.Publishing}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Price:</strong> {card.Price} THB
        </p>
        {card.Bestseller && (
          <span className="inline-block bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Bestseller
          </span>
        )}
        {card.Flashsale && (
          <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
            Flashsale: {card.Flashsale} THB
          </span>
        )}
        <a
          href={`view?id=${card.id}`}
          className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2"
        >
          ดูข้อมูล
        </a>
      </div>
    </div>
  );
};

export default Card;
