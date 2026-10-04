import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  if (!tasks) {
    return <p>No tasks yet</p>;
  } else {
    tasks.map((task) => {
      return (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      );
    });
  }
  return;
}
export default TodoList;
