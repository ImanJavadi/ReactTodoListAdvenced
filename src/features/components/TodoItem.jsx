import React from "react";

export const TodoItem=React.memo(({ todo, onDelete, onUpdate })=> {
  console.log('TodoItem was rendered!')
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onUpdate(todo.id, { completed: !todo.completed })}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </span>
        <button onClick={() => onDelete(todo.id)}>حذف</button>
      </li>
    );
  });
  