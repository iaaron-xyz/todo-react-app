// import { useContext } from "react";
// import { TodoContext } from "../contexts/TodoContext";

const BtnCreateTodoItem = () => {
  return (
    <div className="add-new-item">
      <input type="text" placeholder="Add a new item" />
      <button
        type="button"
        className="add-item-button"
        onClick={() => console.log("Add task")}
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default BtnCreateTodoItem;
