import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const Task: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => [dispatch(addTask(title)), setTitle("")]}>
        Add
      </button>
    </div>
  );
};

export default Task;
