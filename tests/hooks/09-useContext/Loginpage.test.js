import { render, screen } from "@testing-library/react";
import React from "react";
import { UserContext } from "../../../src/09-useContext/context/userContext";
import { Loginpage } from "../../../src/09-useContext/Loginpage";

describe("Pruebas en <Loginpage />", () => {
  const mockUseSetUser = jest.fn();

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider
        value={{
          user: null,
        }}
      >
        <Loginpage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de llamar el setUser cuando se hace el clic en el boton", () => {
    render(
      <UserContext.Provider
        value={{
          user: null,
          setUser: mockUseSetUser,
        }}
      >
        <Loginpage />
      </UserContext.Provider>
    );
    const button = screen.getByRole("button");
    button.click();
    expect(mockUseSetUser).toBeCalledWith({
      id: 123,
      name: "Edward Andres",
      email: "edward@gmail.com",
    });
  });
});
