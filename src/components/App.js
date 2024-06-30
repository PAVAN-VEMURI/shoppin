import { useState } from "react";
import Summary from "./Summary";
import ItemsList from "./ItemsList";
import AddItemForm from "./AddItemForm";
export default App;

function App() {
  const [itemss, setItemss] = useState([]);
  const [currency, setCurrency] = useState("");
  function populateList(item) {
    setItemss([...itemss, item]);
  }
  function deleteItem(itemId) {
    setItemss(itemss.filter((item) => item.itemId !== itemId));
  }

  function markAsNa(item) {
    const updatedList = itemss.map((i) => {
      if (i === item) {
        i.notAvailable = !i.notAvailable;
      }
      return i;
    });
    setItemss(updatedList);
  }

  function markAsBought(item, actualPrice) {
    console.log(actualPrice);
    const updatedList = itemss.map((i) => {
      if (i === item) {
        i.bought = !i.bought;
        i.actualPrice = actualPrice;
      }
      return i;
    });
    setItemss(updatedList);
  }

  return (
    <>
      <AddItemForm
        onAddItem={populateList}
        itemss={itemss}
        onSetCurrency={setCurrency}
      />
      {itemss !== undefined || itemss.length !== 0 ? (
        <ItemsList
          items={itemss}
          deleteItem={deleteItem}
          markNa={markAsNa}
          markBought={markAsBought}
          currency={currency}
        />
      ) : null}
      <Summary itemList={itemss} currency={currency} />
    </>
  );
}
