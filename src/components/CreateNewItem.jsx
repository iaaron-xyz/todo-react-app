const BtnCreateTodoItem = () => {
  return (
    <div className="add-new-item">
      <input type="text" placeholder="Add a new item" />
      <button
        type="button"
        onClick={(event) => console.log(event.target)}
        className="add-item-button"
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default BtnCreateTodoItem;
