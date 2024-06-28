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
  return (
    <div className="App">
      <h1 className="title-app">TodoApp</h1>

      <TodoSearch />
      <TodoCounter completed={3} total={6} />
      <CreateNewItem />

      <TodoList>
        {defaultTodos.map((item) => {
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
