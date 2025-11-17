import { useState } from "react";

export default function Todoinput({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo.."
          title="Enter a todo.."
        />
        <button>Add</button>
      </form>
    </>
  );
}
