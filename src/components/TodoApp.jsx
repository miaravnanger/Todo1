import { useState } from "react";
import TodoInput from "./Todoinput.jsx";
import TodoFilters from "./TodoFilters.jsx";
import TodoList from "./Todolist.jsx";
import TaskCard from "./TaskCard.jsx";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const createTask = (text) => {
    return {
      id: crypto.randomUUID(),
      title: text,
      completed: false,
      createdAt: new Date(),
    };
  };

  const addTask = (text) => {
    setTodos((prev) => [...prev, createTask(text)]);
  };
  
  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };
  return (
    <>
      <h1>Velkommen</h1>
      <TodoInput onAdd={addTask} />
      <TodoFilters />
      <TodoList todos={todos} onDelete ={deleteTask} onToggle={toggleComplete} />
    </>
  );
}
