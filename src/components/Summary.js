import ItemsList from "./ItemsList";

export default function Summary({ itemList, currency }) {
  const totalEstimatedPrice = itemList.reduce((acc, current) => {
    if (current.bought) {
      return acc + Number(current.estimatedPrice);
    } else {
      return acc;
    }
  }, 0);

  const totalActualPrice = itemList.reduce((acc, current) => {
    if (current.bought) {
      return acc + Number(current.actualPrice);
    } else {
      return acc;
    }
  }, 0);
  return (
    <div className="summary-container">
      <h2>Shopping Summary</h2>
      <div className="summary-details">
        <div>
          <span>
            <strong>Total Number of Items:</strong> {itemList.length}
          </span>
          <span>
            <strong>Number of Items Bought:</strong>
            {itemList.filter((item) => item.bought).length}
          </span>
          <span>
            <strong>Number of Items Not Available:</strong>
            {itemList.filter((item) => item.notAvailable).length}
          </span>
        </div>
        <div>
          <span>
            <strong>Total Estimated Price:</strong>
            {currency}
            {totalEstimatedPrice}
          </span>
          <span>
            <strong>Total Actual Price:</strong>
            {currency}
            {totalActualPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
