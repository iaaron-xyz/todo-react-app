import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const BtnCreateTodoItem = () => {
  const { showModal, setShowModal } = useContext(TodoContext);

  return (
    <div className="add-new-item">
      <input type="text" placeholder="Add a new item" />
      <button
        type="button"
        onClick={() => setShowModal(!showModal)}
        className="add-item-button"
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default BtnCreateTodoItem;
