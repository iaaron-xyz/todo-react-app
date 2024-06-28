const TodoItem = ({ text, completed }) => {
  return (
    <li className="list-item">
      <span>{completed ? "✔" : "-"}</span>
      <p className="list-item-text">{text}</p>
      <span>x</span>
    </li>
  );
};

export default TodoItem;
