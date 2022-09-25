import React from "react";
import PropTypes from "prop-types";

export const TodoItem = ({ taskName, isItDone, handleRemove, toggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="span"
        onDoubleClick={() => toggleTodo()}
        className={`align-self-center ${
          isItDone && "text-decoration-line-through"
        }`}
      >
        {taskName}
      </span>
      <button
        data-testid="deleteButton"
        onClick={() => handleRemove()}
        className="btn btn-outline-danger"
      >
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  taskName: PropTypes.string.isRequired,
  isItDone: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
