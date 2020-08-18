import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

function Task({ item }) {
  const { deleteItem, setTitle, setCurrentId, setIsEdit } = useContext(
    TaskListContext
  );

  const handleEdit = () => {
    setTitle(item.title);
    setCurrentId(item.id);
    setIsEdit(true);
  };

  return (
    <li className="list-item">
      <span>{item.title}</span>
      <div>
        <button className="btn btn-delete" onClick={() => deleteItem(item.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn btn-edit" onClick={handleEdit}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
}

export default Task;
