import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../../src/08-intro-reducer/TodoApp";
import useTodo from "../../../src/hooks/useTodo";

jest.mock("../../../src/hooks/useTodo");

const todos = [
  { id: '1', desc: "Preparar el almuerzo", done: false },
  { id: '2', desc: "Conseguir la gema del tiempo", done: false },
];

describe("Pruebas en <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos,
    toggleTodo: jest.fn(),
    onNewTodo: jest.fn(),
    handleRemove: jest.fn(),
  });

  test("Debe mostrar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText("Preparar el almuerzo")).toBeTruthy();
    expect(screen.getAllByText("Conseguir la gema del tiempo")).toBeTruthy();
  });
});
