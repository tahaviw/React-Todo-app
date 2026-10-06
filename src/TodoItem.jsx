function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-text ${task.completed ? "completed" : ""}`}>
      {" "}
      {/*task-text sets the default text style that never changes whether the task is done or not*/}
      {task.text}
      <label>
        <input
          type="ckeckbox"
          checked={task.completed}
          onClick={() => onToggle(task.id)}
        />
      </label>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
