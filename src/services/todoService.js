let fakeTodos = [
  { id: 1, title: "Learn React", completed: false },

];
// services/todoService.js
  
  export const getTodos = () =>{ return Promise.resolve(fakeTodos)};
  
  export const deleteTodo = (id) => {
    fakeTodos = fakeTodos.filter((todo) => todo.id !== id);
    return Promise.resolve(true);
  };
  
  export const updateTodo = (id, updated) => {
    fakeTodos = fakeTodos.map((t) => (t.id === id ? { ...t, ...updated } : t));
    return Promise.resolve(true);
  };
  
  export const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    fakeTodos.push(newTodo);
    return Promise.resolve(newTodo);
  };
  