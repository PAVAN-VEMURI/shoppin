import { useState } from "react";
const currenciesList = [
  { value: "USD", description: "US Dollar", symbol: "$" },
  { value: "EUR", description: "Euro", symbol: "€" },
  { value: "GBP", description: "British Pound", symbol: "£" },
  { value: "JPY", description: "Japanese Yen", symbol: "¥" },
  { value: "AUD", description: "Australian Dollar", symbol: "A$" },
  { value: "CAD", description: "Canadian Dollar", symbol: "C$" },
  { value: "CHF", description: "Swiss Franc", symbol: "CHF" },
  { value: "CNY", description: "Chinese Yuan", symbol: "¥" },
  { value: "HKD", description: "Hong Kong Dollar", symbol: "HK$" },
  { value: "NZD", description: "New Zealand Dollar", symbol: "NZ$" },
  { value: "SEK", description: "Swedish Krona", symbol: "kr" },
  { value: "KRW", description: "South Korean Won", symbol: "₩" },
  { value: "SGD", description: "Singapore Dollar", symbol: "S$" },
  { value: "INR", description: "Indian Rupee", symbol: "₹" },
  { value: "RUB", description: "Russian Ruble", symbol: "₽" },
  { value: "ZAR", description: "South African Rand", symbol: "R" },
];
const unitList = ["count", "kg", "grams", "liters", "gallons"];

export default function AddItemForm({
  onAddItem,
  itemss,

  onSetCurrency,
}) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState();
  const [estimated, setEstimated] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddItem({
      itemId: Date.now(),
      itemName: itemName,
      quantity: Number(quantity),
      unit: unit,
      estimatedPrice: Number(estimated),
      actualPrice: Number(0),
      bought: false,
      notAvailable: false,
    });
    setItemName("");
    setQuantity("");
    setEstimated("");
  }
  return (
    <div className="form-container">
      <form id="shopping-list-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Add Item to Shopping List</h2>
          <div className="currency-select">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              required
              onChange={(event) => {
                console.log(event.target.value);
                onSetCurrency(event.target.value);
              }}
              defaultValue={""}
              disabled={
                itemss.length === 0 || typeof itemss === "undefined"
                  ? false
                  : true
              }
            >
              <option value="" disabled>
                Select Currency
              </option>
              {currenciesList.map((currency) => (
                <option value={currency.symbol} key={currency.value}>
                  {currency.description + " "}({currency.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <input
            onChange={(event) => {
              setItemName(event.target.value);
            }}
            type="text"
            id="item-name"
            name="item-name"
            placeholder="item name"
            required
            value={itemName}
          />
        </div>

        <div className="form-group inline-group">
          <input
            onChange={(event) => setQuantity(event.target.value)}
            type="text"
            id="item-quantity"
            name="item-quantity"
            placeholder="Quantity"
            pattern="\d*"
            required
            value={quantity}
          />
          <select
            id="quantity-unit"
            name="quantity-unit"
            required
            onChange={(event) => {
              setUnit(event.target.value);
            }}
          >
            <option value="" disabled>
              Unit
            </option>
            {unitList.map((unit) => (
              <option value={unit} key={unit}>
                {unit}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="estimated-price"
            name="estimated-price"
            placeholder="Estimated Total Price"
            pattern="[0-9]*[.,]?[0-9]{0,2}"
            required
            onChange={(event) => setEstimated(event.target.value)}
            value={estimated}
          />
        </div>

        <button className="action-button-add" type="submit">
          + Add Item
        </button>
      </form>
    </div>
  );
}
