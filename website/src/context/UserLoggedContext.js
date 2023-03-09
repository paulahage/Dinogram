import React, { useContext, useEffect, useState } from "react";
import { fetchLoggedUser } from "../services/ApiService";

const UserLoggedContext = React.createContext();

export const UserLoggedProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({});

  const getLoggedUser = async () => {
    const user = await fetchLoggedUser();
    setLoggedUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    const loggedUserOnStorage = JSON.parse(localStorage.getItem("user"));

    if (loggedUserOnStorage) {
      setLoggedUser(loggedUserOnStorage);
      return;
    }
    getLoggedUser();
  }, []);

  return (
    <UserLoggedContext.Provider value={{ loggedUser }}>
      {children}
    </UserLoggedContext.Provider>
  );
};

export const useUserLoggedContext = () => {
  return useContext(UserLoggedContext);
};
