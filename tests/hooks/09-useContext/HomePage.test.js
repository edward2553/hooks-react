import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "../../../src/09-useContext/HomePage";
import { UserContext } from "../../../src/09-useContext/context/userContext";

describe("Pruebas en el componente de <HomePage />", () => {
  const user = {
    id: "1",
    name: "Edward",
  };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider
        value={{
          user: null,
        }}
      >
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); // aria label
    expect(preTag.innerHTML).toBe("null");

    // screen.debug();
  });

  test("Debe mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider
        value={{
          user,
        }}
      >
        <HomePage />
      </UserContext.Provider>
    ); 
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name);
  });
});
