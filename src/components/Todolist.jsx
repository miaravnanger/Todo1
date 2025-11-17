import TaskCard from "./TaskCard";

export default function Todolist({ todos, ...rest }) {
  return (
    <>
      {todos.map((task) => (
        <TaskCard key={task.id} task={task} {...rest}/>
      ))}
    </>
  );
}
