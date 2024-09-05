// react elements
import { useState } from "react";
// custom hooks
import useLocalStorage from "../hooks/useLocalStorage";
// data and intial values
import defaultTodos from "../data/defaultTodos";
// styles
import "../css/fonts.css";
// components
import AppUI from "./AppUI";

function App() {
  // States
  const [todos, updateTodos] = useLocalStorage("TODOS_LIST", defaultTodos);
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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      checkTodo={checkTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
