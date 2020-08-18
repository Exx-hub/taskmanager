import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

function TaskListContextProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [title, setTitle] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const addTodo = (title) => {
    if (title) {
      setTasks([...tasks, { title, id: uuidv4() }]);
    }
  };

  const clearAll = () => {
    if (tasks.length > 0) {
      setTasks([]);
    }
  };

  const deleteItem = (id) => {
    const filtered = tasks.filter((item) => item.id !== id);
    setTasks([...filtered]);
  };

  const editItem = () => {
    if (title.length > 0) {
      const mapped = tasks.map((item) => {
        if (currentId === item.id) {
          item.title = title;
        }
        return item;
      });
      setTasks(mapped);
      setTitle("");
      setIsEdit(false);
    }
    return;
  };

  return (
    <TaskListContext.Provider
      value={{
        title,
        setTitle,
        tasks,
        addTodo,
        clearAll,
        deleteItem,
        editItem,
        setCurrentId,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
