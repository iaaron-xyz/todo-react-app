const TodoSearch = () => {
  return (
    <input
      placeholder="Search a Task"
      onChange={(event) => console.log(event.target.value)}
      className="input-filter"
    />
  );
};

export default TodoSearch;
