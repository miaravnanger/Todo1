import { useState } from "react";
import TodoInput from "./Todoinput";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";
import { FILTER, SORT_ORDERS } from "../utils/filterConfig";
import { sortArray, toggleFilter } from "../utils/filters";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTodos } from "../hooks/useTodos";

export default function TodoApp() {
  //_______________________________________
  const [todos, setTodos] = useLocalStorage("todo", []);
  ///_______________________________________________

  const [filter, setFilter] = useState(FILTER.ALL);
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.AZ);

  const {
       addTask,
    deleteTask,
    toggleComplete,
    editTask,
  } = useTodos(todos, setTodos)

  return (

    <>
      <h1>Velkommen</h1>
      <TodoInput onAdd={addTask} />
      <TodoFilters {...{ filter, setFilter, sortOrder, setSortOrder }} />
      <TodoList
        todos={sortArray(toggleFilter(todos, filter), sortOrder)}
        onDelete={deleteTask}
        onToggle={toggleComplete}
        onEdit={editTask}
      />
    </>
  );
}

