import React from "react";
import { UserContext } from "./userContext";
import PropTypes from "prop-types";
import { useState } from "react";

// const user = {
//   id: 123,
//   name: "Edward Andres Moron Quintana",
//   email: "Edward@gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider
    //   value={{ hola: "Mi nombre es Frailejon Ernesto Perez", user: null }}
    // >

    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
