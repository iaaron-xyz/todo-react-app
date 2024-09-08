import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const BtnCreateTodoItem = () => {
  const [newTodoText, setNewTodoText] = useState("");

  const { createNewTodo } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoText(event.target.value);
  };

  return (
    <form className="add-new-item">
      <input
        type="text"
        placeholder="Add a new item"
        value={newTodoText}
        onChange={onChange}
      />
      <button
        type="button"
        className="add-item-button"
        onClick={() => createNewTodo(newTodoText, setNewTodoText)}
      >
        <span>+</span>
      </button>
    </form>
  );
};

export default BtnCreateTodoItem;
