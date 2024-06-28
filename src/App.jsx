import TodoItem from "./components/TodoItem";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import BtnCreateTodoItem from "./components/BtnCreateTodoItem";

const defaultTodos = [
  { text: "Buy eggs", completed: true },
  { text: "Buy bacon", completed: false },
  { text: "Prepare lunch", completed: false },
  { text: "Go to the Gym", completed: false },
];

function App() {
  return (
    <div className="App">
      <h1>ToDo React App</h1>

      <TodoCounter completed={3} total={6} />
      <TodoSearch />

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

      <BtnCreateTodoItem />
    </div>
  );
}

export default App;
