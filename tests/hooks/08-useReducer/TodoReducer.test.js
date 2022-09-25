import { todoReducer } from "../../../src/08-intro-reducer/todoReducer";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../../../src/consts";

describe("Pruebas en todoReucer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe agregar un todo", () => {
    const action = {
      type: ADD_TODO,
      payload: {
        id: 2,
        description: "Nuevo todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe de eliminar un todo", () => {
    const action = {
      type: REMOVE_TODO,
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
    
  });

  test("Debe de realizar el toggle del todo", () => {
    const action = {
        type: TOGGLE_TODO,
        payload: 1
      };
  
      const newState = todoReducer(initialState, action);
      expect(newState[0].done).toBe(true);
      const newState2 = todoReducer(newState, action);
      expect(newState2[0].done).toBe(false);
  });
});
