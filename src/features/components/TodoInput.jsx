import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>افزودن</button>
    </div>
  );
}
