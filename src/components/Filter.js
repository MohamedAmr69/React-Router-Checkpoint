import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/todoSlice";

const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="mb-3">
      <input type="radio" name="filter" onChange={handleChange} />
      <label className="ms-2">
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </label>
    </div>
  );
};

export default Filter;
