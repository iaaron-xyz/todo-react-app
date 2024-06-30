const TodoSearch = ({ searchValue, setSearchValue }) => {
  console.log(`search value: ${searchValue}`);
  return (
    <input
      placeholder="Search a Task"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      className="input-filter"
    />
  );
};

export default TodoSearch;
