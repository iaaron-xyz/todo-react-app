import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import CheckIcon from "./icons/CheckIcon";
import CircleXIcon from "./icons/CircleXIcon";

const TodoItem = ({ text, completed, id, onComplete, onDelete }) => {
  const [editMode, seteditMode] = useState(false);
  const [itemTodoText, setItemTodoText] = useState(text);

  let iconCheck = null;
  if (completed) {
    iconCheck = "/circle-check.svg";
  } else {
    iconCheck = "/circle.svg";
  }

  const { editTodo } = useContext(TodoContext);

  console.log(editMode);

  function onChangeEdit(text) {
    setItemTodoText(text);
  }

  function onCancelEdit() {
    seteditMode(false);
    setItemTodoText(text);
  }

  function onSaveEdit(id, newText) {
    editTodo(id, newText);
    seteditMode(false);
  }

  if (editMode) {
    return (
      <li className="list-item list-item-edit-mode" id="{id}">
        <div>
          <button
            type="button"
            onClick={() => onSaveEdit(id, itemTodoText)}
            className="btn-edit btn-accept-edit"
          >
            <CheckIcon color="green" />
          </button>
          <button onClick={onCancelEdit} className="btn-edit btn-cancel-edit">
            <CircleXIcon color="red" />
          </button>
        </div>
        <input
          type="text"
          value={itemTodoText}
          onChange={(event) => {
            onChangeEdit(event.target.value);
          }}
          className="input-todo-edit"
        />
      </li>
    );
  }

  return (
    <li className="list-item" id={id}>
      {/* Check icon */}
      <img
        src={iconCheck}
        alt=""
        height={30}
        onClick={onComplete}
        className="list-item-check"
      />

      {/* Todo text */}
      <p className={`list-item-text  ${completed && "list-item-text-checked"}`}>
        {text}
      </p>

      {/* Option icons*/}
      <div className="list-item-options">
        {/* Edit icon */}
        <img
          src="/edit.svg"
          alt=""
          height={30}
          onClick={() => seteditMode(true)}
          className="list-item-edit"
        />
        {/* Delete icon */}
        <img
          src="/trashbin.svg"
          alt=""
          onClick={onDelete}
          height={30}
          className="list-item-delete"
        />
      </div>
    </li>
  );
};

export default TodoItem;
