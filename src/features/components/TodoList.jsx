import React from "react";
import {TodoItem} from "./TodoItem";

export const TodoList=React.memo(({ todos, onDelete, onUpdate })=> {
  console.log('---TodoList was rendered!---');
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
})
