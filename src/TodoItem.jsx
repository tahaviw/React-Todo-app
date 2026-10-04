function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-text ${task.completed ? "completed" : ""}`}>
      {" "}
      //task-text sets the default text style that never changes, whether the
      task is done or not.
      {task.text}
    </div>
  );
}

export default TodoItem;
