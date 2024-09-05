import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  // Get the stored items in case they exist
  const localStorageItems = localStorage.getItem(itemName);

  // Get the current list if exist, otherwise set an initial value
  let parsedItems;
  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    parsedItems = JSON.parse(localStorageItems);
  }

  const [items, setItems] = useState(parsedItems);

  const updateItems = (updatedItems) => {
    // update local storage items
    localStorage.setItem(itemName, JSON.stringify(updatedItems));
    // update to render items
    setItems(updatedItems);
  };

  return [items, updateItems];
}

export default useLocalStorage;
