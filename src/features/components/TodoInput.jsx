import React, { useState } from "react";

export const TodoInput=React.memo(({ onAdd })=>{
  const [text, setText] = useState("");
  console.log("TodoInput was rendered!");
  const submit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>َAdd</button>
    </div>
  );
})