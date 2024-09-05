import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loadingTodos, setLoadingTodos] = useState(true);
  const [errorTodos, setErrorTodos] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        // Get the stored items in case they exist
        const localStorageItems = localStorage.getItem(itemName);
        // Get the current list if exist, otherwise set an initial value
        let parsedItems;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItems(parsedItems);
        setLoadingTodos(false);
      } catch (error) {
        setLoadingTodos(false);
        setErrorTodos(true);
      }
    }, 2000);
  }, []);

  const updateItems = (updatedItems) => {
    // update local storage items
    localStorage.setItem(itemName, JSON.stringify(updatedItems));
    // update to render items
    setItems(updatedItems);
  };

  return {
    items,
    updateItems,
    loadingTodos,
    errorTodos,
  };
}

export default useLocalStorage;
