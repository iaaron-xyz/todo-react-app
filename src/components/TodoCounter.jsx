const TodoCounter = ({ total, completed }) => {
  return (
    <h2>
      Tasks: {completed} of {total} completed
    </h2>
  );
};

export default TodoCounter;
