import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoCounter = () => {
  const { totalTodos, completedTodos, loadingTodos } = useContext(TodoContext);
  return (
    <>
      <div className="todo-counter">
        <div>
          <h2>List progress</h2>
          <p>Items completed</p>
        </div>
        <div className="todo-progress">
          {!loadingTodos && `${completedTodos}/${totalTodos}`}
        </div>
      </div>
    </>
  );
};

export default TodoCounter;
