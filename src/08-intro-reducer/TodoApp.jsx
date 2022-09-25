import React from "react";
import useTodo from "../hooks/useTodo";
import { TodoAdd } from "./components/TodoAdd";
import TodoList from "./components/TodoList";

export const TodoApp = () => {
  
  const {todos, handleRemove, onNewTodo, toggleTodo} = useTodo();

  return (
    <div className="container">
      <h1>
        TodoApp: {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
              handleRemove={handleRemove}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </div>
  );
};
