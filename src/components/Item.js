import { useState } from "react";

export default function Item({
  item,
  deleteItem,
  markNa,
  markBought,
  currency,
}) {
  function disclaimer() {
    window.alert("Please enter the price you bought the item for");
  }
  function returnItem() {
    setActalPrice(0);
    markBought(item, Number(actualPrice));
  }
  const [actualPrice, setActalPrice] = useState("");
  return (
    <li className="item-entry">
      <div className="item-header">
        <span className="item-name">
          <strong>Item Name:</strong> {item.itemName}
        </span>
      </div>
      <div className="item-details">
        <span>
          <strong>Quantity:</strong> {item.quantity}
        </span>
        <span>
          <strong>Unit:</strong> {item.unit}
        </span>
        <span>
          <strong>Estimated Price:</strong> {currency}
          {item.estimatedPrice}
        </span>
        <input
          type="text"
          className="actual-price"
          placeholder="Actual Price"
          value={actualPrice}
          onChange={(event) => setActalPrice(event.target.value)}
          disabled={item.bought ? true : false}
        />
      </div>
      <div className="item-actions">
        <button
          className="action-button-bought"
          disabled={item.notAvailable ? true : false}
          onClick={() => {
            actualPrice === ""
              ? disclaimer()
              : item.bought
              ? returnItem()
              : markBought(item, Number(actualPrice));
          }}
        >
          {item.bought
            ? "Return"
            : item.notAvailable
            ? "Not available to buy"
            : "Buy"}
        </button>
        <button
          disabled={item.bought ? true : false}
          className="action-button-na"
          onClick={() => markNa(item)}
        >
          {!item.notAvailable ? "Not Available" : "Available"}
        </button>
        <button
          className="action-button-delete"
          onClick={() => deleteItem(item.itemId)}
          disabled={item.bought ? true : false}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
