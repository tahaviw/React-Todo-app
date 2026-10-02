import { useState } from "react";

function TodoForm(onAdd) {
  const [inputVar, setInputVar] = useState("");
  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log("You Submited:", inputVar);
    setInputVar(event.target.value);
  };
  return (
    <form className="todo-form" action="">
      <input
        className="todo-form__input"
        type="text"
        value={inputVar}
        onChange={HandleSubmit}
      />
      <button className="todo-form__button" type="submit">
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
