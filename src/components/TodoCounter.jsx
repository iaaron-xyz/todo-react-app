const TodoCounter = ({ total, completed, loadingTodos }) => {
  return (
    <>
      <div className="todo-counter">
        <div>
          <h2>List progress</h2>
          <p>Items completed</p>
        </div>
        <div className="todo-progress">
          {!loadingTodos && `${completed}/${total}`}
        </div>
      </div>
    </>
  );
};

export default TodoCounter;
