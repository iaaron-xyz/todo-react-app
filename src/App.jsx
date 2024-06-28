import TodoItem from "./components/TodoItem";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import BtnCreateTodoItem from "./components/BtnCreateTodoItem";

function App() {
  return (
    <>
      <div className="App">
        <h1>ToDo React App</h1>

        <TodoCounter />
        <TodoSearch />

        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>

        <BtnCreateTodoItem />
      </div>
    </>
  );
}

export default App;
