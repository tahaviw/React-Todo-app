import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks yet</p>;
  } else {
    return (
      <div>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
  return;
}
export default TodoList;
