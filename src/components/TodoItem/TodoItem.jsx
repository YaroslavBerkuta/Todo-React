import React from "react";
import { Cheack } from "./Cheack";
import { BsTrash } from "react-icons/bs";
export const TodoItem = ({ todo, changeTodos, removeTodos }) => {
  return (
    <div className="flex items-center mb-4 rounded-2xl bg-gray-800 p-5 w-full justify-between">
      <div className="flex items-center cursor-pointer" onClick={() => changeTodos(todo.id)}>
        <Cheack isCompleted={todo.isCompleted} />
        <span className={`${todo.isCompleted ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </div>
      <button onClick={() => removeTodos(todo.id)}>
        <BsTrash size={24} className="text-gray-900 hover:text-red-900" />
      </button>
    </div>
  );
};
