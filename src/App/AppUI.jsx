// components
import TodoItem from "../components/TodoItem";
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import CreateNewItem from "../components/CreateNewItem";
import TodosLoading from "../components/TodosLoading";

function AppUI({
  loadingTodos,
  errorTodos,
  totalTodos,
  completedTodos,
  searchedTodos,
  searchValue,
  setSearchValue,
  checkTodo,
  deleteTodo,
}) {
  return (
    <div className="App">
      <h1 className="title-app">TodoApp</h1>

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
        loadingTodos={loadingTodos}
      />
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
              />
            );
          })}
        </TodoList>
      )}
    </div>
  );
}

export default AppUI;
