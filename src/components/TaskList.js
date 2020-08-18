import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

function TaskList() {
  const { tasks } = useContext(TaskListContext);
  return (
    <div className="task-part">
      {tasks.length > 0 ? (
        <ul className="list">
          {tasks.map((item) => (
            <Task key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h2 className="no-task">No tasks at the moment :)</h2>
      )}
    </div>
  );
}

export default TaskList;
