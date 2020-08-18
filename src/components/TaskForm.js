import React, { useContext, useRef, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

function TaskForm() {
  const inputRef = useRef();

  const { title, setTitle, addTodo, clearAll, editItem, isEdit } = useContext(
    TaskListContext
  );

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTodo = () => {
    addTodo(title);
    setTitle("");
  };
  const handleClear = () => {
    clearAll();
  };

  return (
    <div className="form">
      <input
        className="input"
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={inputRef}
      />
      <div className="buttons">
        {isEdit ? (
          <button className="edit-btn" onClick={editItem}>
            Edit Task
          </button>
        ) : (
          <button className="add-btn" onClick={handleAddTodo}>
            Add Task
          </button>
        )}

        <button className="clear-btn" onClick={handleClear}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
