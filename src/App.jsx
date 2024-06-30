import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateNewItem from "./components/CreateNewItem";
import "./fonts.css";

const defaultTodos = [
  { text: "Buy eggs", completed: true },
  { text: "Buy bacon", completed: false },
  { text: "Prepare lunch", completed: false },
  { text: "Go to the Gym", completed: false },
];

function App() {
  // States
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  // Derived states
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

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
              key={item.text}
              text={item.text}
              completed={item.completed}
            />
          );
        })}
      </TodoList>
    </div>
  );
}

export default App;
