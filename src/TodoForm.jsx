import { useState } from "react";

function TodoForm(onAdd) {
  const [inputVar, setInputVar] = useState("");
  const HandleSubmit = (event) => {
    event.preventDefault();
    setInputVar(event.target.value);
    console.log("You Submited:", inputVar);
  };
  return (
    <form action="">
      <input type="text" value={inputVar} onChange={HandleSubmit} />
      <button type="submit">ADD</button>
    </form>
  );
}

export default TodoForm;
