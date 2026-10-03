import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  return (
    <>
      <TodoForm onAdd={addTask} />
    </>
  );
}
export default App;
