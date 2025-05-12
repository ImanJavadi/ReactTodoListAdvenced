// features/todos/index.jsx
import { useCallback, useEffect, useState } from "react";
import { getTodos, deleteTodo, updateTodo, addTodo } from "../services/todoService";
import {TodoList} from "./components/TodoList";
import {TodoInput} from "./components/TodoInput";

export default function TodosFeature() {
  const [todos, setTodos] = useState([]);
  console.log('container was rendered!');
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
    <>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
    </>
  );
}
