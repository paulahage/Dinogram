import React, { useContext, useEffect, useState } from "react";
import { fetchSearchedUsers } from "../services/ApiService";

const SearchUserContext = React.createContext();

export const SearchUserProvider = ({ children }) => {
  const [mySearch, setMySearch] = useState("");
  const [usersList, setUsersList] = useState([]);

  const searchUsers = async (mySearch) => {
    try {
      const search = await fetchSearchedUsers(mySearch);

      if (search.status === 200) {
        setUsersList(search.data);
      }
    } catch (error) {
      if (error.response.status === 429) {
      }
    }
  };

  useEffect(() => {
    searchUsers(mySearch);
  }, [mySearch]);

  return (
    <SearchUserContext.Provider
      value={{ mySearch, setMySearch, usersList }}
    >
      {children}
    </SearchUserContext.Provider>
  );
};

export const useSearchUserContext = () => {
  return useContext(SearchUserContext);
};
