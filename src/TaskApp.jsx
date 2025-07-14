import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskApp = () => {
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const tasks = [
    { id: 1, title: "Learn React", important: true },
    { id: 2, title: "Do Exercise", important: false },
    { id: 3, title: "Make Portfolio", important: true },
    { id: 4, title: "Watch Netflix", important: false },
  ];

  const filteredTasks = showImportantOnly
    ? tasks.filter((task) => task.important)
    : tasks;

  return (
    <div className="task-container">
      <h2>📝 My Task List</h2>

      <button
        onClick={() => setShowImportantOnly(!showImportantOnly)}
        className="filter-btn"
      >
        {showImportantOnly ? "Show All Tasks" : "Show Important Only"}
      </button>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} title={task.title} important={task.important} />
        ))}
      </ul>

      {/* 👇 Footer Credit */}
      <footer className="footer">
        Built by <strong>Muhammad Zubair</strong> (
        <a
          href="https://www.facebook.com/zubair.coder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevZubair
        </a>
        )
      </footer>
    </div>
  );
};

export default TaskApp;
