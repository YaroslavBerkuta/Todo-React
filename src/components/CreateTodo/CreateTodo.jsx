import React, { useState } from "react";

export const CreateTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState("");
  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTodo("");
  };
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <input
        type="text"
        placeholder="Enter the task"
        className="w-full rounded-2xl bg-transparent outline-none"
        value={todo}
        onKeyPress={(e) => e.key === "Enter" && addTodo(todo)}
        onChange={(e) => setTodo(e.target.value)}
      />
    </div>
  );
};
