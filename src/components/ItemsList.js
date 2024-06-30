import Item from "./Item";
export default function ItemsList({
  items,
  deleteItem,
  markNa,
  markBought,
  currency,
}) {
  console.log(`itemlist ${currency}`);
  return (
    <div className="items-list-container">
      <h2>Items List</h2>
      <ul id="items-list">
        {items.map((item) => (
          <Item
            item={item}
            deleteItem={deleteItem}
            markNa={markNa}
            markBought={markBought}
            currency={currency}
            key={item.itemId}
          />
        ))}
      </ul>
    </div>
  );
}
