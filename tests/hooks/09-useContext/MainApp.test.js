import React from "react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../../src/09-useContext/MainApp";
const { render, screen } = require("@testing-library/react");

describe("Pruebas en <MainApp />", () => {
  test("Debe de mostrar el homePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Home page")).toBeTruthy();
  });
  test("Debe de mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Loginpage")).toBeTruthy();
  });
});
