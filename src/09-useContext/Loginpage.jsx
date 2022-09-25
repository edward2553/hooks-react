import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const Loginpage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Loginpage</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        onClick={() =>
          setUser({
            id: 123,
            name: "Edward Andres",
            email: "edward@gmail.com",
          })
        }
        className="btn btn-primary"
      >
        Establecer Usuario
      </button>
    </>
  );
};
