import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { CreateTodo } from "../../components/CreateTodo/CreateTodo";

export const Home = () => {
  const [todos, setTodos] = useState([
    { id: 0, title: "Finish the essay", isCompleted: false },
    { id: 1, title: "Hello React", isCompleted: false },
  ]);
  const changeTodos = (id) => {
    const copy = [...todos];
    const current = copy.find((todos) => todos.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  const removeTodos = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
    console.log(todos);
  };

  return (
    <Layout>
      <div className="text-white w-4/5 mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">To do APP</h1>
        <CreateTodo setTodos={setTodos} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodos={changeTodos}
            removeTodos={removeTodos}
          />
        ))}
      </div>
    </Layout>
  );
};
