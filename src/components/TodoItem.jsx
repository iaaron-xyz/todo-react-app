const TodoItem = ({ text, completed }) => {
  let iconCheck = "/circle.svg";
  if (completed) {
    iconCheck = "/circle-check.svg";
  }

  return (
    <li className="list-item">
      {/* Check icon */}
      <img
        src={iconCheck}
        alt=""
        height={30}
        onClick={() => console.log("Check the task")}
      />

      {/* Todo text */}
      <p className="list-item-text">{text}</p>

      {/* Delete and Edit icons */}
      <div className="todo-item-options">
        <img
          src="/edit.svg"
          alt=""
          height={30}
          onClick={() => console.log("Edit message")}
          className="edit-btn"
        />
        <img
          src="/trashbin.svg"
          alt=""
          onClick={() => console.log("Delete message")}
          height={30}
          className="delete-btn"
        />
      </div>
    </li>
  );
};

export default TodoItem;
