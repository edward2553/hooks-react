import React from "react";
import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todo, handleRemove, toggleTodo }) => {
  return (
    <ul className="list-group">
      <TodoItem
        taskName={todo.desc}
        handleRemove={() => handleRemove(todo.id)}
        toggleTodo={() => toggleTodo(todo.id)}
        isItDone={todo.done}
      />
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    desc: PropTypes.string,
    done: PropTypes.bool,
  }),
  handleRemove: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
