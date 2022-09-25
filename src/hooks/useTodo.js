import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-intro-reducer/todoreducer";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../consts";

const initialState = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    const action = {
      type: ADD_TODO,
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemove = (id) => {
    const action = {
      type: REMOVE_TODO,
      payload: id,
    };

    dispatch(action);
  };

  const toggleTodo = (id) => {
    const action = {
      type: TOGGLE_TODO,
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    toggleTodo,
    onNewTodo,
    handleRemove,
  };
};

export default useTodo;
