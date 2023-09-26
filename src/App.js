import "./App.css";
import React, { useState } from "react";
import TaskList from "./component";
import { taskList } from "./constant";

 
export default function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    setTasks([...tasks, { todo, status: "todo" }]);
    setTodo("");
  };

  const updateTaskStatus = (taskIndex, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className="inputfield"
      />
      <button
        className="btnSubmit"
        disabled={todo.length <= 0}
        onClick={handleSubmit}
      >
        Submit
      </button>

      <div className="container">
        {taskList.map((item) => (
          <TaskList
            title={item.title}
            tasks={tasks}
            updateTaskStatus={updateTaskStatus}
            filterStatus={item.filterStatus}
            filterClassName={item.myClassName}
          />
        ))}
      </div>
    </div>
  );
}

