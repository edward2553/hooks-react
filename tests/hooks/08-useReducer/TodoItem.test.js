import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-intro-reducer/components/TodoItem";

describe("Pruebas en el componente TodoItem", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el Todo pendiente de completar", () => {

    render(
      <TodoItem
        taskName={todo.description}
        isItDone={todo.done}
        toggleTodo={onToggleTodoMock}
        handleRemove={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');

  });

  test("Debe de mostrar el Todo completado", () => {

    todo.done = true

    render(
      <TodoItem
        taskName={todo.description}
        isItDone={todo.done}
        toggleTodo={onToggleTodoMock}
        handleRemove={onDeleteTodoMock}
      />
    );
    
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');

  });

  test('El span debe de llamar el toggleTodo cuando se hace clic', () => {

    render(
      <TodoItem
        taskName={todo.description}
        isItDone={todo.done}
        toggleTodo={onToggleTodoMock}
        handleRemove={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.doubleClick(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalled();

  });

  test('Button debe de llamar el deleteTodo', () => {

    render(
      <TodoItem
        taskName={todo.description}
        isItDone={todo.done}
        toggleTodo={onToggleTodoMock}
        handleRemove={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByTestId('deleteButton');
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalled();

  });

});
