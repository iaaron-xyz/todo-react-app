import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultTodos } from "../data/defaultTodos";

const TodoContext = createContext();

function TodoProvider({ children }) {
  // States
  const {
    items: todos,
    updateItems: updateTodos,
    loadingTodos,
    errorTodos,
  } = useLocalStorage("TODOS_LIST", defaultTodos);

  const [searchValue, setSearchValue] = useState("");

  // Derived states
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  // functions for states
  const checkTodo = (id) => {
    // copy all current todo items
    const newTodos = [...todos];
    // find the index of the todo with the given id
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    // toggle the boolean value
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // update the state of todos
    updateTodos(newTodos);
  };

  const deleteTodo = (id) => {
    // copy all current todo items
    const copyTodos = [...todos];
    // remove the todo with the given id
    const newTodos = copyTodos.filter((todo) => todo.id !== id);
    // update the state of todos
    updateTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loadingTodos,
        errorTodos,
        totalTodos,
        completedTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        checkTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
