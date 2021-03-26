import React from "react";
import { selectTask } from "./taskSlice";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);

  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
