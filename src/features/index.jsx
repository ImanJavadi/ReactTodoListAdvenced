// features/todos/index.jsx
import { useCallback, useEffect, useReducer, useState } from "react";
import { getTodos, deleteTodo, updateTodo, addTodo } from "../services/todoService";
import {TodoList} from "./components/TodoList";
import {TodoInput} from "./components/TodoInput";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";

export default function TodosFeature() {
  const [todos, setTodos] = useState([]);
  const [state,dispach]=useReducer(TodoReducer,{color:'green'});
  console.log(`container was rendered!`);
  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleDelete =useCallback((id)=>{
    deleteTodo(id).then(() => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    });
  },[]);
    


  const handleUpdate =useCallback((id,data)=>{
    updateTodo(id, data).then(() => {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...data } : t))
      );
    });
  },[]);

  const handleAdd =useCallback((title)=>{
    addTodo(title).then((newTodo) => setTodos((prev) => [...prev, newTodo]));
  },[]); 

  return (
    
      <TodoContext.Provider value={[todos,{state,dispach}]}>
       <TodoInput  onAdd={handleAdd} />
       <TodoList  onDelete={handleDelete} onUpdate={handleUpdate} />
      </TodoContext.Provider>
  );
}

