import React from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { name: "Aprender Html", completed: false },
    { name: "Aprender Css", completed: true },
    { name: "Aprender Git", completed: false },
    { name: "Aprender VScode", completed: false },
    { name: "Aprender Javascript", completed: true },
    { name: "Aprender React", completed: false },
  ];

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;