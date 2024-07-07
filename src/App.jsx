import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateNewItem from "./components/CreateNewItem";
import "./fonts.css";

const defaultTodos = [
  { id: 1, text: "Open TodoApp", completed: true },
  { id: 3, text: "Create your first Task", completed: false },
  { id: 4, text: "Search for specific Todos", completed: false },
];

// Get the stored todos if exist
const localStorageTodos = localStorage.getItem("TODOS_LIST");

// Get the current list if exist, otherwise create a default list
let parsedTodos;
if (!localStorageTodos) {
  localStorage.setItem("TODOS_LIST", JSON.stringify(defaultTodos));
} else {
  parsedTodos = JSON.parse(localStorageTodos);
}

function App() {
  // States
  const [todos, setTodos] = useState(parsedTodos);
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

  const updateTodos = (updatedTodos) => {
    // update local storage todo list
    localStorage.setItem("TODOS_LIST", JSON.stringify(updatedTodos));
    // update to render todos
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="title-app">TodoApp</h1>

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <CreateNewItem />

      <TodoList>
        {searchedTodos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
              id={item.id}
              onComplete={() => checkTodo(item.id)}
              onDelete={() => deleteTodo(item.id)}
            />
          );
        })}
      </TodoList>
    </div>
  );
}

export default App;
