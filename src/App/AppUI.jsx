import { useContext } from "react";
// components
import TodoItem from "../components/TodoItem";
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import CreateNewItem from "../components/CreateNewItem";
import TodosLoading from "../components/TodosLoading";
// context
import { TodoContext } from "../contexts/TodoContext";

function AppUI() {
  const {
    loadingTodos,
    errorTodos,
    searchedTodos,
    checkTodo,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext);

  return (
    <div className="App">
      <h1 className="title-app">TodoApp</h1>

      <TodoSearch />
      <TodoCounter />
      <CreateNewItem />

      {loadingTodos && <TodosLoading />}
      {errorTodos && <p>An error ocurred x_X</p>}

      {!loadingTodos && (
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
                onUpdate={() => updateTodo(item.id)}
              />
            );
          })}
        </TodoList>
      )}
    </div>
  );
}

export default AppUI;
