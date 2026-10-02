import { useState } from "react";

function TodoForm({ onAdd }) {
  const [inputVar, setInputVar] = useState("");
  const HandleChange = (event) => {
    setInputVar(event.target.value);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    onAdd(inputVar);
    console.log("You Submited:", inputVar);
    setInputVar("");
  };
  return (
    <form className="todo-form" onSubmit={HandleSubmit}>
      <input
        className="todo-form__input"
        type="text"
        value={inputVar}
        onChange={HandleChange}
      />
      <button className="todo-form__button" type="submit">
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
