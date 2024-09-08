import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
