const TodoItem = ({ text, completed, id, onComplete, onDelete }) => {
  let iconCheck = "";
  if (completed) {
    iconCheck = "/circle-check.svg";
  } else {
    iconCheck = "/circle.svg";
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
          onClick={() => console.log("Edit message")}
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
