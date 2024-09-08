import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const ModalContent = () => {
  const { setShowModal } = useContext(TodoContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <button
          onClick={() => setShowModal(false)}
          className="modal-close-button"
        >
          X
        </button>
        <h3>Write your Task!</h3>
        <input type="text" />
        <button
          onClick={() => console.log("Createtodo()")}
          className="modal-add-button"
        >
          Add task!
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
