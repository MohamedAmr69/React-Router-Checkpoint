import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import Filter from "./Filter";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.todo);
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true; // filter === 'all'
  });

  return (
    <div>
      <Filter filter="all" />
      <Filter filter="done" />
      <Filter filter="notDone" />
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
