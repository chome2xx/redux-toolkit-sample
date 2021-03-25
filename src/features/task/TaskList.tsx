import React from "react";
import { selectTask } from "./taskSlice";
import { useSelector } from "react-redux";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);

  return (
    <div>
      <table>
        <th>
          <td>ID</td>
          <td>TITLE</td>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
              </tr>
            );
          })}
        </th>
      </table>
    </div>
  );
};

export default TaskList;
