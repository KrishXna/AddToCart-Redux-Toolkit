import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const setUserContext = (val) => {
    setUser(val);
  };

  return (
    <>
      <UserContext.Provider value={{ user, setUser, setUserContext }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
