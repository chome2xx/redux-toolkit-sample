import React from "react";
import styles from "./Task.module.css";

interface PropTypes {
  task: { id: number; title: string };
}

const Task: React.FC<PropTypes> = ({ task }) => {
  return (
    <div className={styles.root}>
      <div>{task.id}</div>
      <div>{task.title}</div>
    </div>
  );
};

export default Task;
