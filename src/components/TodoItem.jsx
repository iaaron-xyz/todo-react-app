const TodoItem = ({ text, completed }) => {
  let iconCheck = "/circle.svg";
  if (completed) {
    iconCheck = "/circle-check.svg";
  }

  return (
    <li className="list-item">
      <img
        src={iconCheck}
        alt=""
        height={30}
        onClick={() => console.log("Check the task")}
      />
      <p className="list-item-text">{text}</p>
      <div>
        <img
          src="/edit.svg"
          alt=""
          height={30}
          onClick={() => console.log("Edit message")}
        />
        <img
          src="/trashbin.svg"
          alt=""
          onClick={() => console.log("Delete message")}
          height={30}
        />
      </div>
    </li>
  );
};

export default TodoItem;
