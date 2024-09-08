// styles
import "../css/fonts.css";
// components
import AppUI from "./AppUI";
// contexts
import { TodoProvider } from "../contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
