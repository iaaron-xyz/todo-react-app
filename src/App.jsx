import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateNewItem from "./components/CreateNewItem";
import "./fonts.css";

const defaultTodos = [
  { id: 1, text: "Buy eggs", completed: true },
  { id: 2, text: "Buy bacon", completed: false },
  { id: 3, text: "Prepare lunch", completed: false },
  { id: 4, text: "Go to the Gym", completed: false },
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

  // functions for states
  const checkTodo = (id) => {
    // copy all current todo items
    const newTodos = [...todos];
    // find the index of the todo with the given id
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    // toggle the boolean value
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // update the state of todos
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    // copy all current todo items
    const newTodos = [...todos];
    // remove the todo with the given id
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    // update the state of todos
    setTodos(filteredTodos);
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
