import React from "react";
import { useForm } from "../../hooks/useForm";
import { generateId } from "../../utils";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, onInputChange, onResetForm } = useForm({
    id: generateId(),
    desc: "",
    done: false,
  });

  const { desc } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.length <= 1) return;
    onNewTodo({
      ...formState,
      desc: typeof desc === "string" ? desc.trim() : desc,
    });
    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="desc"
        id="desc"
        value={desc}
        onChange={onInputChange}
        placeholder="¿Que hay que hacer?"
        className="form-control"
      />
      <button type="submit" className="btn btn-sm btn-outline-success mt-2">
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
