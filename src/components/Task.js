import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/todoSlice";

const Task = ({ task }) => {
  const [editable, setEditable] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (editedDescription.trim() !== "") {
      dispatch(editTask({ id: task.id, description: editedDescription }));
      setEditable(false);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-2 task-item">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        className="me-2"
      />
      {editable ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span className="flex-grow-1" onClick={() => setEditable(true)}>
          {task.description}
        </span>
      )}
    </div>
  );
};

export default Task;
