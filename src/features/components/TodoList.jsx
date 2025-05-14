import React, { useContext } from "react";
import {TodoItem} from "./TodoItem";
import { TodoContext } from "../TodoContext";

export const TodoList=React.memo(({ onDelete, onUpdate })=> {
  console.log('---TodoList was rendered!---');
  const [todos,{state,dispach}]=useContext(TodoContext);
  return (
    <div style={{backgroundColor:state.color}}>
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
    <button onClick={()=>dispach({color:'red'})}>Red</button>
    <button onClick={()=>dispach({color:'blue'})}>Blue</button>
    <button onClick={()=>dispach({color:'default'})}>Default</button>
    </div>
  );
})
