import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    const task = {
      id: Date.now(), //this one gives every task specific id based on the ms it's created on
      text: text,
      completed: false,
    };
    setTasks([...tasks, task]);
  };
  console.log(tasks);
  return (
    <>
      <TodoForm onAdd={addTask} />
      <TodoList />
    </>
  );
}
export default App;
