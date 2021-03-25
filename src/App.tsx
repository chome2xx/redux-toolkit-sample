import React from "react";
import "./App.css";
import AddTask from "./features/task/AddTask";
import TaskList from "./features/task/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTask />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
