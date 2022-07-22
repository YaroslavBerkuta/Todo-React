import React, { useState } from "react";

export const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Enter the task"
        className="p-3 w-full rounded-2xl bg-gray-800 mb-5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};
