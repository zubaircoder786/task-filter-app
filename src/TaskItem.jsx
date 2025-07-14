import React from "react";

const TaskItem = ({ title, important }) => {
  return (
    <li className="task-item">
      {title} {important && <span className="star">🌟</span>}
    </li>
  );
};

export default TaskItem;
