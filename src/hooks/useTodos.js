

export const useTodos = (todos, setTodos) => {
  const createTask = (text) => {
    return {
      id: crypto.randomUUID(),
      title: text,
      completed: false,
      createdAt: Date.now(),
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

  const editTask = (id, newText) => {
    setTodos((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, title: newText } : task;
      })
    );
  };

  return {
    addTask,
    deleteTask,
    toggleComplete,
    editTask,
  };
};
