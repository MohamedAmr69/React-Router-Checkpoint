import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

function AddTask() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    if (input.trim() !== "") {
      dispatch(
        addTask({
          description: input,
          isDone: false,
        })
      );
      setInput(""); // Clear input after submission
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add new task"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-primary mt-2" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
