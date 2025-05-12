let fakeTodos = [
  { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Redux", completed: false },  
    { id: 3, title: "Learn React Router", completed: false },
    { id: 4, title: "Learn React Testing", completed: false },  
    { id: 5, title: "Learn React Native", completed: false },
    { id: 6, title: "Learn React Native Testing", completed: false },
    { id: 7, title: "Learn React Native Navigation", completed: false },
    { id: 8, title: "Learn React Native Redux", completed: false },  
    { id: 9, title: "Learn React Native Firebase", completed: false },
    { id: 10, title: "Learn React Native Maps", completed: false },
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
  