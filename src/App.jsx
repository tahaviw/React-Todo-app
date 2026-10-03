import { useState } from "react";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    const task = {
      id: 0,
      text: text,
      complited: false,
    };
  };
  return (
    <>
      <TodoForm onAdd={addTask} />
    </>
  );
}
export default App;
